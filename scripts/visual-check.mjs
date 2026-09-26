import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

/* global document, getComputedStyle, innerHeight, requestAnimationFrame, scrollTo, window */

await mkdir('qa', { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
});

const errors = [];
const sections = [
  ['why', '.why-haven'],
  ['identity', '.identity-section'],
  ['rewired', '.rewired-section'],
  ['agents', '.agents-section'],
  ['testimonials', '.testimonials-section'],
  ['services', '.services-section'],
  ['features', '.features-section'],
  ['blog', '.blog-section'],
  ['outro', '.outro-section'],
  ['footer', '.site-footer'],
];

async function capture(viewport, prefix, ratios) {
  const page = await browser.newPage({ viewport });
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${prefix}: ${message.text()}`);
  });
  page.on('pageerror', (error) => errors.push(`${prefix}: ${error.message}`));

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3600);

  const metrics = await page.evaluate(() => {
    const hero = document.querySelector('.hero-shell');
    return {
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      heroHeight: hero.offsetHeight,
      viewportHeight: innerHeight,
    };
  });

  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(120);
  await page.mouse.move(viewport.width / 2, viewport.height / 2);
  await page.mouse.wheel(0, 900);

  const motion = await page.evaluate(
    () =>
      new Promise((resolve) => {
        const samples = [];
        const startedAt = performance.now();

        const sample = (now) => {
          const house = document.querySelector('.hero-house-primary');
          samples.push({
            elapsed: Math.round(now - startedAt),
            scrollY: Math.round(window.scrollY * 100) / 100,
            houseTransform: getComputedStyle(house).transform,
          });

          if (now - startedAt < 700) {
            requestAnimationFrame(sample);
          } else {
            resolve(samples);
          }
        };

        requestAnimationFrame(sample);
      }),
  );

  const distinctScrollPositions = new Set(motion.map(({ scrollY }) => scrollY)).size;
  const distinctHouseTransforms = new Set(motion.map(({ houseTransform }) => houseTransform)).size;

  for (const [name, ratio] of ratios) {
    const scrollRange = metrics.heroHeight - metrics.viewportHeight;
    await page.evaluate((top) => scrollTo(0, top), scrollRange * ratio);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `qa/${prefix}-${name}.png` });
  }

  const sectionMetrics = {};
  await page.mouse.move(1, 1);
  for (const [name, selector] of sections) {
    const section = await page.locator(selector).first().evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { y: rect.top + window.scrollY, width: rect.width, height: rect.height };
    });

    sectionMetrics[name] = {
      y: Math.round(section.y),
      width: Math.round(section.width),
      height: Math.round(section.height),
    };
    await page.evaluate((top) => scrollTo(0, top), Math.max(0, section.y - 30));
    await page.waitForTimeout(900);
    await page.screenshot({ path: `qa/${prefix}-section-${name}.png` });
  }

  await page.waitForTimeout(1500);
  const media = await page.evaluate(() => ({
    failedImages: [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.src),
    pendingImages: [...document.images].filter((image) => !image.complete).length,
    videos: [...document.querySelectorAll('video')].map((video) => ({
      readyState: video.readyState,
      paused: video.paused,
    })),
  }));

  await page.close();
  return {
    ...metrics,
    motion: {
      samples: motion.length,
      distinctScrollPositions,
      distinctHouseTransforms,
      start: motion.at(0)?.scrollY,
      end: motion.at(-1)?.scrollY,
    },
    sectionMetrics,
    media,
  };
}

const desktop = await capture(
  { width: 1440, height: 1000 },
  'desktop',
  [
    ['00', 0],
    ['25', 0.25],
    ['50', 0.5],
    ['75', 0.75],
    ['100', 1],
  ],
);

const mobile = await capture(
  { width: 390, height: 844 },
  'mobile',
  [
    ['00', 0],
    ['50', 0.5],
    ['100', 1],
  ],
);

console.log(JSON.stringify({ desktop, mobile, errors }, null, 2));
await browser.close();
