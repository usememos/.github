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

## Mark

A bird drawn in the manner of early pictographs, the oldest records of what someone once thought. One filled shape, one color. It is never redrawn: not traced, outlined, stretched, cropped, or colored in parts.

| File | Use |
| --- | --- |
| [assets/logo.svg](assets/logo.svg) | Above 32 px. |
| [assets/logo-small.svg](assets/logo-small.svg) | 32 px and below. |
| [assets/avatars/](assets/avatars/) | Profile pictures: eight 512 × 512 PNGs, one per color, named `memos-<color>.png`. |

The SVGs draw the bird in `currentColor` with no background. Set the color with CSS `color`, and an optional background and radius with the `--logo-background` and `--logo-radius` custom properties.

A primary palette is not chosen yet. Pick one avatar color per surface.

## Wordmark and lockup

**Memos** uses [Source Serif 4](https://github.com/adobe-fonts/source-serif) Semibold (`600`), optical size `32`, kerning enabled, and `−0.015em` letter spacing. The font is free for personal and commercial use under the [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md). This typeface choice applies only to the wordmark.

| File | Visible bird height |
| --- | --- |
| [assets/lockup.svg](assets/lockup.svg) | Above 32 px. |
| [assets/lockup-small.svg](assets/lockup-small.svg) | 32 px and below. |

With **H** equal to the visible capital M height, the bird sits on the left at `1.2H` tall, with a `0.4H` gap between shapes and `0.25H` canvas padding on each side. Preserve the supplied optical alignment and scale uniformly.

The SVGs use outlined lettering, one `currentColor` fill, and a transparent background; no font is required. Inline them to set CSS `color`, using dark on light or light on dark.

## Changes

Open a pull request against this file. Public surfaces are updated after it merges, with these words and no others.
