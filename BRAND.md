# Memos brand

Everything said about Memos in public comes from this file. Change it here first. The [brand page](https://usememos.com/brand) is the public catalog of the mark.

## Who it is for

Someone who records thoughts in short moments throughout the day, often a sentence at a time. They want to write while a thought is fresh and then get back to what they were doing. They value being able to revisit those thoughts later, with control over their data and sharing.

Some keep their memos private; others share with family and friends or publish on the web. Public words speak to this person as “you”.

## What Memos gives them

A place for each thought. Writing starts with what is on their mind. A single sentence can be a whole memo, and they can take their time with a longer entry. Markdown gives their words formatting and structure when they want it.

A record they can return to. Each memo stays with the day it was written, forming a personal timeline. Tags help them follow a topic across those days and find past entries.

Ownership of their data. Memos is open-source and self-hosted. Their record lives on their own server, and their data stays theirs.

Sharing they control. They decide what stays private, what to share with family and friends, and what to publish on the web. In shared spaces, they can write alongside others while keeping their own memos.

## How Memos talks

Quiet, plain, and natural. Lead with what the reader can write, keep, revisit, and share. Use connected sentences and concrete experiences. Express the value positively: a single sentence can be a whole memo.

Name open-source and self-hosted clearly in the product introduction, and connect them to ownership of the reader’s data. Explain Markdown, tags, and spaces through the writing, revisiting, and sharing they support. Keep claims about capabilities and data handling specific and factual. Use restrained descriptions of the experience, such as “simple”, and explain the behavior behind them. Avoid comparisons, superlatives, calls to action, and promises of security or encryption.

Use these terms consistently:

- **Memos** is the product name and takes a singular verb. Use “note-taking app” for the product category.
- A **memo** is one entry.
- A **timeline** presents memos in time order.
- A **tag** labels a topic and helps readers find related memos.
- A **space** brings members and their memos together. Each memo keeps its author and its own sharing settings.

Use lowercase memo, timeline, tag, and space in prose, with regular plurals. Preserve capitalization when quoting a UI label. Use personal for the reader’s own record or timeline, and private for a memo’s visibility.

Use curly quotation marks and apostrophes in prose. Preserve literal characters in code, attribute values, paths, and identifiers.

## Copy

The full introduction is the basis for the description and headline. Each piece expresses the same positioning at a different length and should make sense to someone meeting Memos for the first time. In README headers and website heroes, pair the headline with the description. Use the full introduction when there is room to explain the experience. On social cards, the headline appears with the lockup.

Used as written.

| Piece | Purpose | Copy | Where |
| --- | --- | --- | --- |
| Headline | Identifies the category and core use at a glance; leaves product and ownership details to the description. | Simple note-taking for your everyday thoughts. | README header, usememos.com hero, social card |
| Description | States what Memos is, how thoughts come together, and who controls the data and sharing. | Memos is an open-source, self-hosted note-taking app that brings your everyday thoughts together in a personal timeline. Your data stays yours, and you choose what to keep private or share. | README header, usememos.com hero, repository descriptions, page metadata, store subtitles, compact product introductions |
| Full introduction | Explains the experience naturally: everyday writing, a personal record, data ownership, and sharing. | Memos is an open-source, self-hosted note-taking app for your everyday thoughts. It’s a place to write what’s on your mind as you go about your day. A single sentence can be a whole memo, or you can take your time with a longer entry, using Markdown to give your words more structure.<br><br>These moments of writing gradually become a personal record. Each memo stays with the day you wrote it, bringing your thoughts together in a timeline you can look back through. Tags connect related thoughts across those days, making it easy to pick up a topic again or find something you remember writing.<br><br>That record lives on your own server, and your data stays yours. You choose what stays private, what to share with family and friends, and what to publish on the web. In shared spaces, you can write alongside others while each person keeps their own memos. | README, website, documentation introduction, store listings, Docker Hub, Helm, deploy templates |

## Assets

| Asset | Use |
| --- | --- |
| [mark.svg](assets/brand/mark.svg) | Bird alone for navigation and icons, above 32 px. |
| [mark-small.svg](assets/brand/mark-small.svg) | Bird alone at 32 px or below. |
| [lockup.svg](assets/brand/lockup.svg) | Bird and wordmark for headers, using the same artwork at every size. |
| [lockup-small.svg](assets/brand/lockup-small.svg) | Compatibility URL for the same lockup artwork, with compact intrinsic dimensions. |
| [lockup-on-dark.svg](assets/brand/lockup-on-dark.svg) | The same lockup with light artwork for dark-background image embeds. |
| [avatars/](assets/brand/avatars/) | Eight 512 × 512 PNGs for account and organization profiles. |
| [timeline-light.png](assets/previews/timeline-light.png), [timeline-dark.png](assets/previews/timeline-dark.png) | Product previews for the corresponding theme. |
| [social-preview.png](assets/previews/social-preview.png) | 1280 × 640 social card with the official lockup, headline, and celadon background. |
| [sponsors/](assets/sponsors/) | Supplied sponsor artwork. |

Choose standalone mark variants by rendered SVG size. Lockups use one set of outlines and proportions at every size; use `lockup.svg` for new consumers. The recommended minimum lockup width is 145 px, including its canvas padding.

## Mark and wordmark

A bird drawn in the manner of early pictographs, the oldest records of what someone once thought. One filled shape, one color. It is never redrawn: not traced, outlined, stretched, cropped, or colored in parts.

The wordmark uses [Source Serif 4](https://github.com/adobe-fonts/source-serif) at variable weight `550`, optical size `32`, kerning enabled, and `−0.015em` letter spacing, under the [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md). This typeface applies only to the wordmark. Use the supplied SVG lettering; no font installation is required.

With **H** equal to the capital M height, the bird is `1.4H` tall, with a `0.32H` gap between the visible bird and lettering. The bird’s visible vertical center sits `0.03H` below the visible center of the full wordmark. Canvas padding is `0.25H` from the artwork’s outermost visible bounds on each side. Scale the supplied lockup uniformly, preserving its alignment, `viewBox`, and padding; do not change the artwork or optical size for smaller displays.

## Usage

- **Color:** Inline SVGs use `currentColor`; set CSS `color` for a dark fill on light backgrounds and a light fill on dark backgrounds. The mark’s optional `--logo-background` and `--logo-radius` properties control its background rectangle.
- **Image embeds:** `<img>` cannot pass page colors into an SVG. Switch between `lockup.svg` and `lockup-on-dark.svg` using `<picture>` and `prefers-color-scheme`; see the [README example](profile/README.md). Use full public URLs for embeds across repositories.
- **Accessible names:** Name standalone or linked logos “Memos”. Hide decorative duplicates with `alt=""` or `aria-hidden="true"`, while keeping links named.
- **Avatars:** Upload the square PNG unchanged and let the platform apply its mask. Pick one color per surface and use it consistently. A primary palette is not chosen yet.
- **Previews:** Keep light and dark content aligned. Export both 1448 × 1086 PNGs from [tools/preview/](tools/preview/), preserving their aspect ratio and solid control fills. Use the light image as the fallback.
- **Social card:** Export the 1280 × 640 PNG from `tools/preview/build-social.mjs` and its generated preview page. Keep the celadon background flat and scale the official lockup uniformly. The lockup leads, with a smaller, single-line headline below it. Check the rendered headline for fit and readability before export. Align their visible left edges and center the group on the canvas, leaving a clear gap between the artwork and headline.

## Changes

Before moving or removing assets, update their consumers. Preserve active sponsor URLs, including those stored in seeded memos. Keep editable preview sources in `tools/preview/` and experiments out of `assets/`.

Open a pull request against this file. Public surfaces are updated after it merges, with these words and no others.
