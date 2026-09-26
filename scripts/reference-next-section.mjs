import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

/* global document, getComputedStyle, scrollTo, window */

await mkdir('qa/reference-sections', { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
});

const targets = [
  'Why FIND',
  'This isn’t just about real estate.',
  'Real Estate,Rewired.',
  'Don’t Rent Your Career. Own It.',
  'Don’t Take Our Word for It.',
  'How FINDCan Help You',
  'SupportBeyond Buyingand Selling',
  'Blog &Resources',
  'Find You. We’ll Help You Get There.',
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

async function inspect(viewport, prefix) {
  const page = await browser.newPage({ viewport });
  await page.goto('https://findrealestate.com/', { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForTimeout(2500);

  const accept = page.getByRole('button', { name: 'Accept', exact: true });
  if (await accept.isVisible().catch(() => false)) await accept.click();

  const details = await page.evaluate(() => {
    const rectWithPagePosition = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    };

    return {
      bodyHeight: document.documentElement.scrollHeight,
      headings: [...document.querySelectorAll('h1, h2, h3')].map((element) => ({
        tag: element.tagName,
        text: element.textContent.trim(),
        className: element.className,
        parentClass: element.parentElement?.className ?? '',
        sectionClass: element.closest('section')?.className ?? '',
        rect: rectWithPagePosition(element),
        styles: {
          fontSize: getComputedStyle(element).fontSize,
          lineHeight: getComputedStyle(element).lineHeight,
          fontWeight: getComputedStyle(element).fontWeight,
          letterSpacing: getComputedStyle(element).letterSpacing,
          color: getComputedStyle(element).color,
        },
      })),
      sections: [...document.querySelectorAll('main section')].map((element) => ({
        className: element.className,
        rect: rectWithPagePosition(element),
        text: element.textContent.trim().replace(/\s+/g, ' ').slice(0, 300),
      })),
      media: [...document.querySelectorAll('main img, main video')].map((element) => ({
        tag: element.tagName,
        src: element.currentSrc || element.src,
        alt: element.alt ?? '',
        className: element.className,
        parentClass: element.parentElement?.className ?? '',
        sectionClass: element.closest('section')?.className ?? '',
        rect: rectWithPagePosition(element),
        styles: {
          objectFit: getComputedStyle(element).objectFit,
          objectPosition: getComputedStyle(element).objectPosition,
          clipPath: getComputedStyle(element).clipPath,
        },
      })),
    };
  });

  for (const target of targets) {
    const heading = details.headings.find(({ text }) => text.replace(/\s+/g, '') === target.replace(/\s+/g, ''));
    if (!heading) continue;

    await page.evaluate((top) => scrollTo(0, top), Math.max(0, heading.rect.y - 90));
    await page.waitForTimeout(1100);
    await page.screenshot({ path: `qa/reference-sections/${prefix}-${slugify(target)}.png` });
  }

  const agents = details.sections.find(({ text }) => text.startsWith('For Agents'));
  const services = details.sections.find(({ className }) => className.includes('services_root'));
  const blog = details.sections.find(({ className }) => className.includes('latest-posts_root'));
  const extraPositions = [
    ['agents', agents?.rect.y],
    ['services-lower', services && services.rect.y + viewport.height * 0.65],
    ['blog-lower', blog && blog.rect.y + viewport.height * 0.7],
    ['footer', details.bodyHeight - viewport.height],
  ];

  for (const [name, top] of extraPositions) {
    if (typeof top !== 'number') continue;
    await page.evaluate((nextTop) => scrollTo(0, nextTop), Math.max(0, top));
    await page.waitForTimeout(1100);
    await page.screenshot({ path: `qa/reference-sections/${prefix}-${name}.png` });
  }

  details.loadedMedia = await page.evaluate(() =>
    [...document.querySelectorAll('main img, main video')].map((element) => ({
      src: element.currentSrc || element.src,
      alt: element.alt ?? '',
      parentClass: element.parentElement?.className ?? '',
      sectionClass: element.closest('section')?.className ?? '',
    })),
  );

  await page.close();
  return details;
}

const desktop = await inspect({ width: 1440, height: 1000 }, 'desktop');
const mobile = await inspect({ width: 390, height: 844 }, 'mobile');

console.log(
  JSON.stringify(
    {
      desktop: { bodyHeight: desktop.bodyHeight, loadedMedia: desktop.loadedMedia },
      mobile: { bodyHeight: mobile.bodyHeight, loadedMedia: mobile.loadedMedia },
    },
    null,
    2,
  ),
);
await browser.close();
