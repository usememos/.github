# Updating and verifying targets

## Git: source files and generated assets

1. Read the target repository's instructions, inspect status, and verify its remote.
   For `dotcom` public pages/components, read `DESIGN_SYSTEM.md` before editing.
2. Read canonical content from the selected source revision. Do not mix a local
   working-tree `BRAND.md` with assets from a different commit without recording it.
   Reuse the three approved Copy pieces, preserving paragraph boundaries and
   punctuation. Do not create an extra tagline or rewrite canonical copy to fit.
3. Update affected registered files. Find importers before renaming legacy brand
   constants. Keep source-revision comments accurate. Preserve custom application
   branding, sponsor URLs, compatibility assets, and unrelated working-tree changes.
4. For direct asset copies, verify checksums. For inline SVGs, compare paths,
   viewBox, transforms, padding, and color behavior. Preserve outlined lettering;
   do not retype the wordmark or apply the mark's small-size rule to lockups.
5. Rebuild only affected outputs. In `.github`, the existing commands are:

   ```sh
   node tools/preview/build-social.mjs
   node tools/preview/build.mjs
   ```

   Open the generated pages under `tools/preview/dist/` and export with their PNG
   download controls. Inspect those lossless exports before replacing published
   PNGs; screenshots are inspection evidence, not substitutes for the export.
   Follow `tools/preview/README.md`. Keep temporary renders and QA evidence out of
   committed asset directories.
6. Run `git diff --check` and the relevant target checks below. Stage only the run's
   intended paths if a commit is authorized; inspect `git diff --cached --check`
   and the staged filenames before committing. Preserve unrelated staged work.
   Push/create PRs only within the run's authorization, follow repository policy,
   and attach every created PR to the task when that capability is available.
7. Distinguish pushed changes, merged changes, and deployed output. Follow the
   target's deployment/release workflow only when deployment/release is authorized.
   Do not publish a release, rebuild a user's instance, or redeploy the demo as
   an implicit side effect of copying brand assets.

## API: repository metadata

Prefer the official GitHub API, using `gh api` or an equivalent available connector.
Use explicit targets from the registry and the authenticated account's actual
permissions. Recheck the official endpoint and required permissions if capabilities
have changed; do not probe undocumented write endpoints.

```sh
gh api user --jq .login
gh api "repos/$target_repo" --jq '{description, homepage, permissions}'
```

Save the current affected fields and proposed values before a write. Create a UTF-8
JSON payload file containing only changed fields, then use:

```sh
gh api --method PATCH "repos/$target_repo" --input "$payload_file"
gh api "repos/$target_repo" --jq '{description, homepage}'
```

`target_repo` must be an exact registered `owner/repo`; `payload_file` must already
contain the reviewed values from this run. Use structured tool arguments or a
payload file, not shell-interpolated copy. The product repository's description is
verbatim canonical Description; auxiliary repository descriptions retain their
own roles. Preserve homepage when it has not changed. Verify the read-back values
and the public repository About area before marking the target verified.

API writes affect live settings immediately and are not part of a Git commit.
Record before/after values separately. A field-length or permissions error is a
pending target, not permission to shorten approved copy or broaden token access.

## Browser: uploaded images and visual checks

Use an available authenticated browser capability and honor any browser preference
the user specified. Check which account is signed in and whether it can access the
specific settings. CLI authentication does not establish browser authentication.

For the organization description, replace only the Description field with the
canonical Headline and save the profile. Preserve all other profile fields.
Reload the setting and public organization page and compare the displayed value.

For organization avatars:

1. Resolve the exact approved avatar file and record its source revision/palette.
   Keep the square artwork unchanged and let the platform apply its display mask.
2. Navigate to the organization settings and use the current profile-picture upload
   control. Inspect any crop preview for clipping before saving.
3. Reload the public organization page and inspect the actual avatar image. An
   unchanged URL is not proof of unchanged image content, or of a successful update.

For repository social previews:

1. Verify the exported PNG's dimensions, solid background, content, and file size
   against the current canonical rules and GitHub's upload requirements.
2. Open the exact repository's Settings → Social preview and upload that artifact.
   A file committed under `assets/previews/` does not update this uploaded setting.
3. Reload settings, inspect the saved thumbnail, and check the repository page's
   `og:image` when available. Inspect the image it actually references. Record any
   remaining visibility/cache uncertainty instead of assuming every external
   sharing service has refreshed.

Use the documented UI uploads for these settings. Do not extract session cookies
or replay private GitHub upload endpoints as an API shortcut. Do not change the
user's sign-in, account permissions, or unrelated settings to complete an upload.

## Verification checklist

| Surface | Required evidence |
| --- | --- |
| Canonical copies | Compare the selected Copy cells with README, website constants, product About text/metadata, and proposed API fields. Preserve supporting repositories' specific descriptions. |
| Translation resources | Trace About keys into `en.json` and `en-GB.json` and compare their English text with canonical Description. Record other locales as pending translation review unless actually reviewed; preserve custom instance descriptions. |
| SVGs and derivatives | Check direct-copy hashes or embedded-path parity, dimensions, aspect ratios, theme behavior, compatibility references, and licensing. Render small and standard marks and the uniform lockup where affected. |
| `.github` previews | Inspect exported PNGs at full size and small sharing sizes, including 480 px and 320 px widths. Confirm no clipping, a readable single-line Headline, visible left alignment, and balanced lockup/text spacing. A future copy change that fails this check needs a layout adjustment under `BRAND.md`, not an unapproved text rewrite. |
| README | Inspect a GitHub-style render on desktop and mobile, in light and dark themes. Natural mobile headline wrapping is allowed; the card's single-line rule does not apply to README. Preserve image loading, links, sponsors, and project tables. Recheck the actual GitHub rendering after publication when possible. |
| `memos` | Follow current `AGENTS.md`; run the checks appropriate to touched frontend code (`pnpm lint`, `pnpm test`, `pnpm build` in `web` as applicable). Inspect navigation, sign-in/About, collapsed/expanded identity, and custom-title/logo behavior when affected. Inspect manifest/icon references; do not claim an installed-device PWA refresh from a desktop browser check alone. |
| `dotcom` | Follow `AGENTS.md` and `DESIGN_SYSTEM.md`. Standard website verification is `pnpm test`, `pnpm lint`, `pnpm build`; run metadata/OG audits when affected. Inspect desktop/mobile light/dark home hero, shared chrome, `/brand`, `/docs`, and affected social images. Check metadata, JSON-LD, icon URLs, and brand downloads. Check shared app/docs surfaces for regressions when their shared components change. |
| Live settings/output | Re-read written API fields, reload uploaded images, and verify relevant public URLs after source/target publication or deployment. Local and deployed results get separate statuses. |

When a setting or environment is inaccessible, record the exact target, prepared
artifact/value, observed failure, and remaining action. Complete other authorized
targets. Never label a prepared artifact as an applied platform change.

## Final report

Include the source revision and comparison basis, a brief change classification,
and one row per affected target:

| Target | Proposed/applied change | Method | Commit/PR or live URL | Verification | Remaining action |
| --- | --- | --- | --- | --- | --- |

Use the statuses from `SKILL.md`. Include already-matching targets that were checked,
unregistered consumers discovered, unresolved avatar/card choices, and tests not
run. Keep API/browser settings changes separate from Git commits and deployments.

## Official references

- [Update a repository](https://docs.github.com/en/rest/repos/repos#update-a-repository)
- [Organization profile picture](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile#changing-your-organizations-profile-picture)
- [Repository social preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)
