# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React with Vite, GSAP, and Tailwind CSS, explicitly requested by the user.

## Users

Visitors evaluating a high-end real-estate experience and the developer using this repository as a focused animation study.

## Product Purpose

Deliver the complete public landing-page experience for `HAVEN`, a modern real-estate brand, led by its initial loading reveal and scroll-driven hero transition. Success means the motion, section hierarchy, imagery, responsive composition, and pacing feel materially equivalent from the loader through the footer.

## Capabilities and Constraints

- Scope includes the hero, loader, editorial sections, service interactions, resources, closing call to action, and footer.
- The implementation must use current React, GSAP, and Tailwind CSS packages.
- Desktop and mobile behavior must be responsive.
- Motion must degrade safely when reduced motion is requested.
- Search, account, newsletter, and listing backend behavior remain outside this front-end experience.

## Brand Commitments

The brand identity is `HAVEN — Real Estate, Reimagined`. The experience should preserve its cinematic hero, restrained monochrome editorial system, photographic pacing, services and support sections, resources, calls to action, and oversized footer wordmark.

## Evidence on Hand

- The original motion reference URL the layout was modeled on (`findrealestate.com`), captured during implementation.
- Publicly served hero layer assets and client code from the reference site, inspected only to understand the requested hero behavior.
- Desktop and mobile reference captures made during implementation.

## Product Principles

- Motion is the product: preserve spatial continuity across the full scroll journey.
- Keep each section faithful to the reference while avoiding backend behavior outside the page experience.
- Match the reference geometry before adding interpretation.
- Maintain smooth transforms and clear fallbacks across viewport sizes.

## Accessibility & Inclusion

Honor `prefers-reduced-motion`, retain keyboard-visible focus, and keep interactive controls at accessible touch sizes.
