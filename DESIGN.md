---
name: HAVEN Hero Study
description: A cinematic real-estate hero where architectural atmosphere resolves into an exact editorial monogram.
colors:
  ink: "#151717"
  paper: "#ffffff"
  ink-muted: "rgba(21, 23, 23, 0.5)"
typography:
  display:
    fontFamily: "Instrument Sans, Arial, sans-serif"
    fontSize: "clamp(4.8rem, 7.3vw, 6.6rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Sans, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 4.5vw, 4.9rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Instrument Sans, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 2.2vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Instrument Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
  editorial-serif:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.1vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.03em"
rounded:
  pill: "999px"
spacing:
  control-x: "24px"
  page-x: "5.15vw"
  hero-bottom: "184px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px 0 25px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
---

# Design System: HAVEN Landing Page Study

## Overview

**Creative North Star: "The House Inside the Mark"**

This world treats a home not as a catalogue item but as atmosphere becoming identity. Pale sky, isolated architecture, drifting cloud, and rising smoke create cinematic scale; the journey culminates when that complete landscape is held inside the exact HAVEN letterforms.

The editorial layer is deliberately restrained: black ink on white, a geometric sans serif with a limited Lora accent for testimonial quotations, sparse navigation, oversized type, and capsule actions. The interface stays quiet so the scroll choreography can carry the emotion. Every movement preserves spatial continuity and feels like a camera move through one scene, never a collection of unrelated effects.

**Key Characteristics:**

- Monochrome editorial controls over a photographic sky and architectural composition.
- Oversized, tightly tracked headlines balanced by compact navigation and pill actions.
- Full-viewport sticky staging with long, scrubbed transforms and layered parallax.
- An exact HAVEN logo silhouette used as both outline and photographic mask.
- Smooth reduced-motion and responsive fallbacks that preserve the visual hierarchy.
- Long-form editorial sections that alternate white and Carbon Ink surfaces before resolving into the oversized HAVEN footer mark.

## Colors

The palette is architectural and nearly monochrome: Carbon Ink supplies decisive contrast, Clear Paper creates gallery-like space, and Faded Ink lets supporting copy recede without introducing a new hue.

### Primary

- **Carbon Ink:** The only solid interface color, used for headline text, navigation, buttons, focus outlines, and the strongest structural marks.

### Neutral

- **Clear Paper:** The page ground, inverse text color, and final fade destination after the atmospheric hero.
- **Faded Ink:** Secondary copy that should remain legible while yielding to nearby bold language.

### Named Rules

**The Monochrome Interface Rule.** Interactive chrome remains Carbon Ink and Clear Paper; color arrives through the photographic atmosphere, not extra UI accents.

**The Contrast Is the State Rule.** Hover states invert or reveal the existing black-and-white relationship instead of introducing decorative color.

## Typography

**Display Font:** Instrument Sans (with Arial and sans-serif fallbacks)  
**Body Font:** Instrument Sans (with Arial and sans-serif fallbacks)  
**Label Font:** Instrument Sans (with Arial and sans-serif fallbacks)  
**Editorial Accent:** Lora (with Georgia and serif fallbacks), reserved for testimonial quotation copy

**Character:** A single modern grotesk creates confidence through scale rather than ornament. Tight tracking and dense leading make display lines feel like editorial mastheads, while medium-weight body copy stays conversational and controlled.

### Hierarchy

- **Display:** Bold, viewport-responsive, tightly tracked, and compressed in line height. It owns the opening statement and may wrap only at the intentional mobile breakpoint.
- **Headline:** Medium weight with even tighter tracking for the follow-up editorial statement.
- **Body:** Medium weight with selective bold emphasis and muted continuation text; center aligned in the hero and left aligned in editorial sections.
- **Label:** Compact medium-weight copy for navigation and controls. Labels stay in sentence case rather than becoming loud uppercase tags.

### Named Rules

**The Restrained Pairing Rule.** Instrument Sans handles the interface and editorial hierarchy; Lora appears only in testimonial quotation copy.

**The Phrase First Rule.** Preserve complete phrases and balanced wraps before reducing display scale.

## Layout

The hero is a full-viewport sticky stage nested in a long scroll track. Lenis gives wheel input controlled inertia and feeds each interpolated frame into GSAP ScrollTrigger, while the hero timeline remains directly scrubbed to the resulting scroll position. Its content is centered, while the header uses a three-column grid: brand at the leading edge, navigation at center, and account action at the trailing edge. Desktop gutters are viewport-relative and the hero statement sits above the lower architectural silhouette with generous bottom compensation.

Atmospheric layers cover the viewport independently. The sky fills the frame, the house is anchored from below, opposing clouds begin beyond the side edges, smoke rises from the bottom, and the HAVEN mask remains geometrically centered. The following page alternates editorial grids, cinematic media, numbered services, horizontal mobile cards, resources, and a dark footer while preserving the same geometry and motion restraint.

Below the tablet breakpoint, navigation collapses, the brand and action become a two-column header, headline wrapping is allowed, the logo mask becomes fixed-width, and the scroll track shortens. Touch controls become taller and wider. At the narrowest phone width, the account action is removed to protect the brand and stage.

**The One Stage Rule.** All hero layers share one sticky viewport and one spatial coordinate system so scroll motion reads as a continuous camera move.

## Elevation & Depth

There are no box shadows. Depth comes from photographic occlusion, scale, opacity, vertical drift, and z-order: sky behind architecture, clouds around it, outline and mask above it, and smoke crossing the foreground. The white bottom gradient softens the final transition without simulating a raised surface.

**The Atmospheric Depth Rule.** Use overlap and transformed image planes for depth; never add card shadows to the hero world.

## Shapes

Interface geometry is intentionally binary. Navigation and typography remain unboxed and rectilinear, while actions use fully rounded capsules. The signature exception is the precise angular silhouette of the HAVEN wordmark, which must never be approximated with text, a generic font, or a softened mask.

**The Exact Mark Rule.** The outline, mask, and header brand must derive from the same HAVEN vector artwork so every transition lands without silhouette drift.

## Components

### Primary Call to Action

- **Shape:** Fully rounded capsule with a compact desktop height and an enlarged mobile touch target.
- **Primary:** Carbon Ink ground, Clear Paper label, slim matching border, and an inline directional arrow.
- **Hover / Focus:** The fill clears to reveal the scene, text switches to Carbon Ink, the control rises slightly, and the arrow advances. Keyboard focus retains a strong offset Carbon Ink outline.

### Compact Account Action

- **Shape:** Fully rounded capsule with a minimum accessible touch height.
- **Primary:** Carbon Ink ground and Clear Paper text with symmetrical horizontal padding.
- **Hover / Focus:** Inverts to Clear Paper and Carbon Ink while preserving its footprint. It disappears only at the narrowest mobile breakpoint.

### Navigation

- **Style:** A centered horizontal row of sentence-case labels, with wide but controlled gaps and optional lightweight chevrons for grouped destinations.
- **State:** Links draw a one-pixel underline from the opposite edge on hover or focus. Mobile removes the row rather than compressing it into an unreadable strip.

### Hero Statement

- **Style:** A centered four-word display line above a two-tone supporting sentence and one primary action.
- **Entrance:** Each word rises from its own clipped wrapper, followed by the supporting copy and CTA. The sequence uses a confident exponential ease and reveals the stage only after fonts and imagery are ready.

### HAVEN Mask Transition

- **Style:** The exact vector mark first draws as a white outline, then becomes a centered mask containing the moving architectural scene.
- **Scroll behavior:** Architecture scales and rises, clouds separate laterally, and the pinned foreground smoke climbs as editorial content fades. The outlined mark draws briefly before yielding to the photographic mask; a second full-width smoke plane then travels naturally across the pinned scene to occlude the subtitle and complete the white handoff.
- **Scroll feel:** Wheel input is interpolated with Lenis at a restrained `0.085` lerp, synchronized through GSAP's ticker, so every layer follows one fluid camera movement without changing the scene's scroll distance.
- **Accessibility:** Reduced motion reveals a stable first frame, removes the extended scroll track, and keeps the content fully usable.

## Do's and Don'ts

### Do:

- **Do** keep the interface monochrome and let the source imagery carry atmospheric color.
- **Do** preserve the exact HAVEN vector across the header, outline drawing, and image mask.
- **Do** animate transforms and opacity on independent layers to maintain smooth spatial continuity.
- **Do** enlarge controls and rebalance fixed scene geometry for mobile rather than merely scaling the desktop composition.
- **Do** make the static reduced-motion state complete, legible, and immediately available.

### Don't:

- **Don't** introduce gradients, colored buttons, glass cards, or shadows that compete with the photographic stage.
- **Don't** substitute a font-rendered word for the HAVEN vector or alter its proportions.
- **Don't** scatter the hero into disconnected animations; every layer should advance one continuous reveal.
- **Don't** hide content behind loading choreography after required assets and fonts are ready.
- **Don't** turn downstream editorial sections into disconnected card grids or decorative effects that compete with the reference pacing.
