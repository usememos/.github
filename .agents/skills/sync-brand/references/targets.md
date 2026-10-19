# Registered targets

Verified against local sources on 2026-10-19. Recheck paths and capabilities on
every run; this registry describes consumers, not another source of brand copy.
Read current `BRAND.md` for wording, geometry, color, and usage rules. In path
lists, filenames following a directory and colon are relative to that directory.

## Coverage

| Repository or surface | Scope | Delivery |
| --- | --- | --- |
| `usememos/.github` | Canonical brand, organization profile README, official assets, editable previews | Git |
| `usememos/memos` | Product README, default application branding, About text, manifest and icons | Git; application release/deployment remains separate |
| `usememos/dotcom` | Official website source, brand downloads, shared brand components, product messaging and metadata | Git; website deployment remains separate |
| `https://usememos.com` | Home hero, shared header/footer, metadata/structured data, `/brand`, `/docs`, and generated brand-bearing social images | Deployed output of `dotcom`; browser verification |
| `https://github.com/usememos` | Public organization README, short description, and selected organization avatar | README via `.github/profile/README.md`; description and avatar via browser |
| GitHub settings for the three repositories above | Description, homepage, and individually configured repository social-preview image | API for text metadata; browser for image uploads |

`demo.usememos.com` can be checked as a deployed Memos consumer when requested.
Its deployment and users' self-hosted instances are not managed by this skill.
Other repositories (`web-clipper`, `telegram-integration`, `helm`, `editor`, `mui`,
`gomark`, `coss`, and others) are discovery-only until explicitly registered.
Docker Hub/GHCR descriptions, extension stores, Raycast Store, social accounts,
and third-party sharing caches are not synchronization targets in this version.

## Source assets and derived copies

- Copy comes from the three Copy cells in `BRAND.md`. Convert `<br><br>` to
  paragraphs when embedding Full introduction; keep the wording verbatim.
- Bird sources are `assets/brand/mark.svg` and `mark-small.svg`.
- Lockup sources are `assets/brand/lockup.svg`, `lockup-small.svg`, and
  `lockup-on-dark.svg`. The small URL is compatibility artwork, not a separate
  optical design. Preserve paths, viewBox, padding, and theme behavior.
- Avatars are `assets/brand/avatars/<palette>.png`. The website retains both
  `<palette>.png` and `memos-<palette>.png` aliases; map both to the same canonical
  file without renaming upstream assets. There is no universal
  primary palette. An avatar update requires a user-specified asset or an
  established approved mapping for that surface. Keep an existing approved
  mapping; if absent, record the choice as pending instead of choosing a color.
- Preview sources are `tools/preview/`; published PNGs are
  `assets/previews/social-preview.png`, `timeline-light.png`, and `timeline-dark.png`.

## File targets

| ID | Repository and paths | Source and synchronization rule |
| --- | --- | --- |
| `github.profile` | `.github`: `profile/README.md` | Headline plus Description at the top; Full introduction in the body when space permits. Preserve project descriptions, sponsor links, and unrelated guidance. Existing raw GitHub asset URLs reference the published canonical files. |
| `github.previews` | `.github`: under `tools/preview/`: `build-social.mjs`, `build.mjs`, `preview.css`, `dark.css`, `export.js`, `README.md`; `assets/previews/*.png` | Change only affected generators/styles and re-export their PNGs. The social builder reads the Headline Copy cell, not the old Tagline column. A lockup change also affects timeline PNGs embedding that lockup. |
| `memos.readme` | `memos`: `README.md` | Headline plus Description, and Full introduction in an appropriate body section. Audit legacy positioning under `What you get`. Preserve install commands, release guidance, sponsors, badges, and project-specific details. |
| `memos.copy` | `memos`: `web/src/pages/About.tsx`, `web/public/site.webmanifest`; under `web/src/locales/`: `en.json`, `en-GB.json` | Use Headline for the default About heading and Description for English `about.description` and manifest description. Trace translation keys to both English resources. Remove assumptions about the former two-sentence tagline. Preserve custom instance branding and manifest behavior. Other locales require separate translation review; do not mark them synchronized or bulk-translate them merely because English changed. |
| `memos.identity` | `memos`: under `web/src/components/`: `MemosMark.tsx`, `MemosLogo.tsx`, `IdentityLabel.tsx`; `web/src/lib/branding.ts`; under `web/public/`: `logo.svg`, `logo-small.svg`, `favicon.svg`, `logo.webp`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`; `web/index.html` | Mark geometry and appropriate variants come from the canonical marks. Review layout references when usage rules change. The app's instance label is not automatically an outlined marketing lockup. Preserve custom titles, custom logos, legacy URL fallbacks, icon colors, and background treatments. Review cache-version references when replacing icons. |
| `website.copy` | `dotcom`: `src/shared/lib/branding.ts`; `src/app/layout.tsx`; `src/app/(public)/(site)/page.tsx`; under `src/features/marketing/components/`: `hero-section.tsx`, `footer.tsx`; `content/docs/index.mdx` | Replace old Tagline/One-liner/Short/Standard mappings with the current three pieces and update their importers/tests. Pair Headline and Description in the hero. Use Full introduction for the docs introduction. Keep page-specific titles and navigation. |
| `website.derived-copy` | `dotcom`: `src/shared/lib/seo.ts`; `src/features/ai-discovery/lib/llms-content.ts`; `src/app/(public)/(site)/blog/[slug]/page.tsx` | Follow brand-constant imports into default metadata, JSON-LD, discovery exports, footer, and publisher identity. Update shared brand fields, not historical article bodies or article-specific summaries. |
| `website.faq` | `dotcom`: `content/docs/faq.mdx` | Use Description for the product introduction. Align only affected ownership and sharing answers with actual product behavior and current positioning. Avoid absolute claims about who can read data. Preserve unrelated operational answers and links. |
| `website.design-contract` | `dotcom`: `DESIGN_SYSTEM.md` | Keep Homepage composition rules aligned with the canonical Headline/Description slots, without duplicating their strings or retaining obsolete two-sentence tagline rules. Preserve the existing product artifact, palette, and unrelated page exceptions. |
| `website.identity` | `dotcom`: under `src/shared/ui/`: `memos-mark.tsx`, `memos-lockup.tsx`, `memos-lockup-artwork.ts`; `src/shared/lib/brand-assets.ts`; `src/app/(public)/(site)/brand/page.tsx` | Synchronize embedded paths and dimensions from official SVGs. Retire size-dependent lockup geometry while preserving the mark variants. Align `/brand` labels, previews, downloads, and usage explanations with `BRAND.md`. |
| `website.downloads` | `dotcom`: under `public/brand/`: `mark.svg`, `mark-small.svg`, `lockup.svg`, `lockup-small.svg`, `lockup-on-dark.svg`, `OFL-SourceSerif4.txt`; `public/brand/avatars/`; under `public/brand/previews/`: `timeline-light.png`, `timeline-dark.png` | Copy corresponding canonical assets and verify byte equality. Retain the existing Source Serif 4 license; if the font/license changes, use the upstream license linked in `BRAND.md`. Preserve existing `logo.svg`/`logo-small.svg` and avatar filename aliases; check their actual consumers before retiring or repointing them. |
| `website.icons` | `dotcom`: under `public/brand/`: `logo.svg`, `logo-small.svg`, `favicon.svg`, `apple-touch-icon.png`; under `public/`: `favicon.ico`, `apple-touch-icon.png`, `apple-touch-icon-precomposed.png`; `src/app/apple-icon.png`; icon references in `src/app/layout.tsx` | Regenerate affected mark derivatives and verify aliases/references. Preserve each surface's approved palette and shape. A lockup-only update does not change favicons or Apple icons. |
| `website.social` | `dotcom`: `src/app/og/home/image.png/route.tsx`; under `src/shared/content/`: `social-preview-image.tsx`, `social-preview.ts`; shared `MemosLockup` artwork; route families under `src/app/og/docs/`, `src/app/og/blog/`, `src/app/og/changelog/` | Update brand copy/artwork, not content-specific titles or illustration choices. Respect this renderer's own dimensions and layout; do not force the GitHub card's dimensions onto website OG images. Verify `/og/home/image.png`, affected `/og/docs/`, `/og/blog/`, and `/og/changelog/` images, and their metadata. |

Related tests at these locations are covered when their expected brand text or
geometry changes. Re-run `rg` for constant imports and exact asset references;
report an unlisted consumer before broadening mutations. Static assets and inline
components must both be checked: updating the downloads does not update copied paths.

Review other marketing pages for contradictions found
during discovery, but do not mass-replace their page-specific copy. Archived blog
posts, changelogs, generated API docs, sponsors' assets, and user content are not
rewritten by a brand sync.

## GitHub settings targets

| ID | Exact target | Source or rule | Method |
| --- | --- | --- | --- |
| `github.org-description` | Organization `usememos`; `https://github.com/organizations/usememos/settings/profile` → Description | Canonical Headline, verbatim, under the organization name. Preserve the URL and other profile fields. Verify the saved field and public profile. | Browser |
| `github.org-avatar` | Organization `usememos`; `https://github.com/organizations/usememos/settings/profile` | The selected approved square avatar. A mark change can require regeneration before upload; a lockup or copy change alone does not. | Browser |
| `github.memos-about` | `usememos/memos` repository About fields | Description is the canonical product Description. Homepage is `https://usememos.com` unless the approved site URL changes. | API |
| `github.profile-about` | `usememos/.github` repository About fields | Preserve its role as the organization profile, brand assets, and shared community-files repository. Do not paste the product Description here. | API when its role or brand reference actually changes |
| `github.website-about` | `usememos/dotcom` repository About fields | Preserve its role as the source of the website, documentation, and blog. Do not paste the product Description here. | API when its role or brand reference actually changes |
| `github.memos-social` | `https://github.com/usememos/memos/settings` → Social preview | Canonical `assets/previews/social-preview.png`. Updating that file in Git does not upload it to this setting. | Browser |
| `github.profile-social` | `https://github.com/usememos/.github/settings` → Social preview | Inspect the current setting. Update an existing canonical Memos card; creating or replacing a repository-specific card must match the run's requested scope. | Browser |
| `github.website-social` | `https://github.com/usememos/dotcom/settings` → Social preview | Inspect the current setting. Preserve a website-source-specific identity; do not silently replace it with a product card. | Browser when an approved matching artifact is available |

Settings URLs are navigation starting points; use the current UI to find controls.
Repository admin access does not establish organization settings access. Check the
CLI identity and browser identity separately on each run; do not store account names,
tokens, or a past permission result as part of this registry.

## Adding coverage

Register the exact repository/domain, source piece or asset, destination paths or
fields, update method, verification steps, and any publication dependency. Recheck
the paths before documenting them. Add the target only within the user's scope;
matching a filename or finding the word Memos is insufficient evidence.
