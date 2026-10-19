---
name: sync-brand
description: >
  Audit or synchronize approved Memos brand changes across usememos/.github,
  usememos/memos, usememos/dotcom, usememos.com, and the registered GitHub
  organization and repository settings. Use when asked to propagate brand copy,
  marks, lockups, avatars, or previews, or to check those surfaces for drift.
  Do not use for drafting a new brand direction or unrelated repository changes.
---

# Sync Memos brand

Use `usememos/.github/BRAND.md` and its approved assets as the source of truth.
Identify the actual change, check its consumers, update affected registered
targets, and verify the result. Reading or editing this skill does not run a sync.

Read [targets.md](references/targets.md) for coverage and source-to-target mappings.
Read [operations.md](references/operations.md) for Git, API, browser, and verification
procedures. Paths in those references are relative to the named repository.

## 1. Establish the run

- Identify whether the user requested an **audit** or a **sync**. An audit is
  read-only. If the request only asks what changed, report the impact and stop.
- Record the canonical source commit or explicit working-tree snapshot, the
  comparison base, requested targets, and the actions already authorized in the
  conversation. A sync request authorizes the normal updates for its named
  targets, including API changes and browser uploads when those targets are
  included. Continue authorized work without repeated permission questions.
- Keep commit, push/PR, merge, deployment, and release authorization distinct.
  A request to commit means a local commit. Do not infer a production deployment
  or release from a branding sync request.
- Locate repositories by their Git remotes. Sibling checkouts are convenient,
  but do not assume a fixed home directory or that a same-named folder is correct.
  Read each target's `AGENTS.md`; inspect its status before editing. Preserve
  unrelated changes and use an isolated worktree when needed.
- Read the source's first three sections, Copy, Assets, Usage, and Changes.
  Record whether the chosen source has reached the canonical remote default
  branch. `BRAND.md` requires public surfaces to update after the source merges.
  Unmerged work can be audited and consumer changes prepared; hold live metadata
  changes and image uploads until that source is published, unless the user has
  explicitly overridden that order.

Do not guess a comparison base from the last commit: consumers may have missed
several updates. If no range was supplied, compare registered targets with the
current approved source and report the observed drift. Resolve a missing baseline
only when it would materially change which updates the user requested.

## 2. Identify semantic changes

For a supplied range, inspect both revisions, not just the changed filenames:

```sh
git -C "$source_repo" diff --name-status "$base_ref" "$head_ref" -- BRAND.md assets/brand assets/previews tools/preview
git -C "$source_repo" diff "$base_ref" "$head_ref" -- BRAND.md tools/preview
git -C "$source_repo" show "${head_ref}:BRAND.md"
```

Classify the change before choosing destinations:

| Change | What to compare | What it can affect |
| --- | --- | --- |
| Copy | Headline, Description, and Full introduction cells; normalize Markdown paragraph breaks | Registered verbatim copy slots, metadata, About text, and preview text |
| Positioning or voice | The first three sections; separate meaning from punctuation | Review registered derived messaging; preserve approved Copy unless it also changed |
| Mark | Standard/small bird paths, viewBox, color behavior, and variant rules | Inline marks, downloaded marks, favicons, app icons, and avatars using that mark |
| Lockup | Outlined lettering, bird placement, proportions, padding, and color behavior | Lockup components and downloads, headers, social cards, and screenshots embedding it |
| Avatar or palette | The specific square asset or approved surface color | Its assigned platform avatar and direct copies; not every avatar palette |
| Preview or layout | Published PNGs and the editable sources that generate them | Direct preview copies, embedded screenshots, and separately uploaded platform images |
| Asset URL | Renames, moves, removals, and compatibility URLs | Actual consumers of that exact path or URL |
| Documentation only | Rules, terminology, skill links, and editorial fixes | The affected documentation; no automatic metadata or image rewrite |

A change to `lockup.svg` does not prove `mark.svg` changed. Compare geometry and
behavior separately from formatting or serialization. A reference to a fixed raw
GitHub URL may need no file edit after source publication, but still needs a live
check. An inline SVG, copied asset, or rasterized preview needs its own update.

## 3. Build the synchronization checklist

For each affected target in the registry, record:

| Target ID | Source revision and piece/asset | Current value or artifact | Proposed update | Git/API/browser | Publication prerequisite | Status and evidence |
| --- | --- | --- | --- | --- | --- | --- |

Compare the destination's actual contents with the chosen source. Do not use an
old sync report as proof that it is current. Mark already-matching targets
`verified` only after inspecting them in this run.

Search registered repositories for old copy, exact asset URLs, imports of brand
constants, and the components that render them. Keep discovery separate from
mutation: an unregistered consumer is a finding, not an automatic edit target.
Report it and add it to coverage when the user includes it in the scope.

Trace rendered text to its actual source: follow translation keys, shared
constants, metadata builders, and generated exports rather than stopping at the
page component. Synchronize canonical English copy verbatim in registered English
slots. Track other locales separately as translation review; updating English
does not verify other languages or authorize bulk machine translation.

Preserve the role of each repository and page. The organization profile's short
description uses Headline; the Memos product repository's description uses
Description. Auxiliary repositories, feature pages, and documentation navigation
keep their own factual descriptions.

## 4. Synchronize affected targets

Follow the relevant sections of [operations.md](references/operations.md):

- **Git** for versioned text, source code, assets, and generated images.
- **API** for supported GitHub metadata fields, using explicit owner/repo names.
- **Browser** for organization avatars, repository social-preview uploads, and
  visual inspection in an authenticated session.

Use the existing authorization for the run. If a concrete asset choice, target
access, or publication action is missing, prepare the reviewable result, record
the precise missing requirement, and continue independent targets. Do not silently
pick an avatar color, replace a custom instance logo, merge, or deploy.

## 5. Verify and report

Apply the verification checks in the operations reference. Re-read metadata after
API writes, reload uploaded images after browser changes, and inspect rendered
desktop/mobile and light/dark surfaces when affected. A successful request or
local commit alone is insufficient evidence of a visible update.

Report every affected target using these statuses:

- `prepared`: local change or upload artifact is ready; nothing published yet.
- `committed`: record the repository, branch, and commit SHA.
- `published`: record the pushed branch/PR, applied setting, or deployed version;
  an open PR is not a merged change or a deployment.
- `verified`: state what was actually checked, against which revision and URL.
- `pending`: identify the remaining source merge, target merge, deployment,
  authorization, asset choice, or access requirement.

Keep local preparation, Git publication, live settings, and deployed verification
separate in the final report. Include discovered unregistered consumers and any
unperformed checks. Do not claim the whole brand is synchronized while affected
targets remain pending.
