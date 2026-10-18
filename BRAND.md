# Memos brand

Everything said about Memos in public comes from this file. Change it here first. The [brand page](https://usememos.com/brand) is the public catalog of the mark.

## Who it is for

Someone with many quick thoughts a day and nowhere to put them. Not a writer or an organizer; they just want the thought out before it goes. Most note apps ask first: a title, a folder, a place on the page. What they write is theirs. Some share part of it with family and friends.

Public words speak to this person as "you". Sharing is written for that circle. A link anyone can open, the Explore page, and a Memos that several people use are served by the same words, not by separate copy.

## What Memos gives them

A place for every quick thought. Memos asks nothing first: no title, no folder, no place to put it. They type, and the thought is kept before it goes.

A day they can return to. Every memo keeps the day it was written, and any day can be found again.

A record that is theirs. It lives where they decide, reports to no one, and leaves as plain Markdown.

Family and friends, when they choose. A memo is theirs alone until they share it. Each person writes their own memos and sees only what the others choose to show.

## How Memos talks

Like that person's own notebook would, if it could talk. Quiet and plain. It says what is yours and what you can do, never what the software does or where it runs. Open-source is the one fact about the software it may state, where readers look for it. It says fast, private, and yours; never frictionless, secure, or encrypted. It does not sell: no comparison with other apps, no superlatives, no call to act.

The product is Memos, singular. One entry is a memo. The whole is the timeline.

## Copy

Used as written.

| Piece | Copy | Where |
| --- | --- | --- |
| Tagline | Seconds to write. Yours to keep. | README header, usememos.com hero |
| One-liner | A timeline for your thoughts. Just type. It stays yours. | Repository descriptions, page metadata |
| Short | Memos is a place for every quick thought. No title, no folder, nothing to pick: type, and the thought is kept on the day you wrote it. Your memos stay where you decide, yours alone until you share one with family and friends. | README, website, Docker Hub, Helm, deploy templates |
| Standard | Memos is an open-source timeline for your quick thoughts. It asks nothing first: no title to invent, no folder to pick, no place to put it. Type, and the thought is kept before it goes. Every memo keeps the day it was written, so any day can be found again: by scrolling, by calendar, by tag, or by word. Your memos live where you decide, report to no one, and leave as plain Markdown whenever you like. They are yours alone until you share one with family or friends, who write their own memos and see only what you choose to show. | Documentation introduction, store listings |

## Assets

| Asset | Use |
| --- | --- |
| [mark.svg](assets/brand/mark.svg) | Bird alone for navigation and icons, above 32 px. |
| [mark-small.svg](assets/brand/mark-small.svg) | Bird alone at 32 px or below. |
| [lockup.svg](assets/brand/lockup.svg) | Bird and wordmark for headers; visible bird above 32 px. |
| [lockup-small.svg](assets/brand/lockup-small.svg) | Lockup with a visible bird of 32 px or below. |
| [lockup-on-dark.svg](assets/brand/lockup-on-dark.svg) | Standard lockup with light artwork for dark-background image embeds. |
| [avatars/](assets/brand/avatars/) | Eight 512 × 512 PNGs for account and organization profiles. |
| [timeline-light.png](assets/previews/timeline-light.png), [timeline-dark.png](assets/previews/timeline-dark.png) | Product previews for the corresponding theme. |
| [social-preview.png](assets/previews/social-preview.png) | 1280 × 640 social card with the official lockup, tagline, and celadon background. |
| [sponsors/](assets/sponsors/) | Supplied sponsor artwork. |

Choose size variants by rendered SVG size for marks and visible bird height for lockups.

## Mark and wordmark

A bird drawn in the manner of early pictographs, the oldest records of what someone once thought. One filled shape, one color. It is never redrawn: not traced, outlined, stretched, cropped, or colored in parts.

The wordmark uses [Source Serif 4](https://github.com/adobe-fonts/source-serif) Semibold (`600`), optical size `32`, kerning enabled, and `−0.015em` letter spacing, under the [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md). This typeface applies only to the wordmark. Use the supplied SVG lettering; no font installation is required.

With **H** equal to the capital M height, the bird is `1.2H` tall, with a `0.4H` gap and `0.25H` canvas padding on each side. Scale the supplied lockup uniformly, preserving its alignment, `viewBox`, and padding.

## Usage

- **Color:** Inline SVGs use `currentColor`; set CSS `color` for a dark fill on light backgrounds and a light fill on dark backgrounds. The mark's optional `--logo-background` and `--logo-radius` properties control its background rectangle.
- **Image embeds:** `<img>` cannot pass page colors into an SVG. Switch between `lockup.svg` and `lockup-on-dark.svg` using `<picture>` and `prefers-color-scheme`; see the [README example](profile/README.md). Use full public URLs for embeds across repositories.
- **Accessible names:** Name standalone or linked logos “Memos.” Hide decorative duplicates with `alt=""` or `aria-hidden="true"`, while keeping links named.
- **Avatars:** Upload the square PNG unchanged and let the platform apply its mask. Pick one color per surface and use it consistently. A primary palette is not chosen yet.
- **Previews:** Keep light and dark content aligned. Export both 1448 × 1086 PNGs from [tools/preview/](tools/preview/), preserving their aspect ratio and solid control fills. Use the light image as the fallback.
- **Social card:** Export the 1280 × 640 PNG from `tools/preview/build-social.mjs` and its generated preview page. Keep the celadon background flat and scale the official lockup uniformly.

## Changes

Before moving or removing assets, update their consumers. Preserve active sponsor URLs, including those stored in seeded memos. Keep editable preview sources in `tools/preview/` and experiments out of `assets/`.

Open a pull request against this file. Public surfaces are updated after it merges, with these words and no others.
