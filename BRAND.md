# Memos brand: positioning and copy

This document defines what Memos is and the exact copy used to say it. Every public description of Memos (README files, usememos.com, Docker Hub, Helm, deploy templates, docs introduction, store listings) is copied from here. When the copy changes, change it here first, then propagate.

Visual identity (logo, color, typography) is covered separately on the [brand assets page](https://usememos.com/brand).

## Principles

Two principles apply to every line of public copy.

1. **Stand on the user's side.** Copy says what you can do and what is yours, not what the software does.
2. **No machinery.** Words like server, instance, binary, database, and host do not appear in copy, however accurate they are. The reader cares that their notes are theirs, not where the bytes sit.

## Positioning

> Memos is a timeline for your thoughts, and it belongs to you. Write a note in seconds, keep it private, or share it with the people you choose.

Short form for headers and metadata: **Your thoughts, your data, shared on your terms.**

"Timeline" holds quick capture and sharing in one word: a feed you post to, where the default reader is you. It describes what you do in Memos (post, choose who sees each memo, browse what others shared in Explore, react, comment, share a link) and separates Memos from knowledge-management tools and team wikis.

Brand copy speaks to one person: the individual who runs Memos for themselves. Small groups sharing one Memos and developers building on it are served by the same copy, not by separate copy.

| Memos is | Memos is not |
| --- | --- |
| A place to write things down fast | A document editor or wiki |
| A personal feed you own | A social network you join |
| Private by default, shareable per memo | Public by default |
| Yours to keep, wherever you choose | A service someone else runs for you |
| Plain text you can take anywhere | A format that locks you in |

## Approved copy

Four pieces of copy, used verbatim.

### Tagline

> Your thoughts, your data, shared on your terms.

### One-liner

> Your own timeline for quick notes, private by default.

### Short

> Memos is a timeline for your notes, and it belongs to you. Write in Markdown, post in seconds, and choose who sees each memo: just you, the people you invite, or anyone with the link.

### Standard

> Memos is an open-source timeline for your thoughts. Write a memo in seconds, tag it, attach files, and move on. Every memo is private by default; share one with the people you choose, or with anyone who has the link, when you want to. Your notes are yours: you keep them where you decide, nobody else reads them, and you can take them with you at any time.

### Where each is used

| Surface | Copy |
| --- | --- |
| GitHub repository and organization descriptions, page metadata | One-liner |
| README headers, usememos.com hero | Tagline + Short |
| Docker Hub, Helm, deploy templates | Short |
| Docs introduction, store listings | Standard |

## Changes

Open a pull request against this file. Copy on other surfaces is updated after the change here is merged.
