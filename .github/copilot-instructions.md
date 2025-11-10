# DevsCard - AI Coding Agent Instructions

## Project Overview

DevsCard is an Astro-based static resume/CV generator with dual rendering modes (web + PDF). The architecture centers on **type-safe data configuration** in `src/data/` that feeds both rendering targets. Users edit TypeScript data files, never touching components.

## Core Architecture Patterns

### Data-First Configuration System

- **Single source of truth**: All CV content lives in `src/data/sections/*.data.ts` and `src/data/config.ts`
- **Type safety via `satisfies ReadonlyDeep<T>`**: Every data file uses this pattern for compile-time validation:
  ```typescript
  const data = { ... } as const satisfies ReadonlyDeep<ExperienceSection>;
  ```
- **Factory pattern for reusable entities**: Skills and links are defined once in `src/data/helpers/` and reused across sections
  - `skills.ts`: `createSkillFactory()` returns functions like `react()` or `react({ level: 4 })`
  - `links.ts`: `createLinkFactory()` returns functions like `github({ url: '...' })`

### Data Transformation Pipeline

The `cv()` function (from `src/data/index.ts`) accepts **data transformers** to modify content without duplication:

```typescript
// In src/pages/pdf.astro
cv(hideSection('testimonials'), hideProject('Side Project X'), renameSkillSet('I speak', 'Languages'));
```

**Key files**:

- `src/data/_internals/transform-data.ts` - Uses Immer for immutable updates
- `src/data/_internals/transformers.ts` - Built-in transformers (`hideSection`, `hideJob`, `hideSkills`, etc.)
- `src/data/_internals/get-cv-data.ts` - Exports the transformer-enabled `cv()` function

### Dual Rendering Architecture

1. **Web** (`src/pages/index.astro`): Full-featured resume with animations, testimonials, favorites
   - Components in `src/web/` (sections, components, scripts)
   - Uses Tailwind, PhotoSwipe, Floating UI
2. **PDF** (`src/pages/pdf.astro`): Print-optimized layout at 794x1122px (A4)
   - Components in `src/pdf/` (stripped-down versions)
   - Rendered via Puppeteer in `scripts/generate-pdf.ts`
   - **Critical**: `prebuild` script temporarily renames `pdf.astro` to `_pdf.astro` to exclude it from production builds

## Development Workflows

### Running & Testing

```bash
npm run dev                 # Dev server at http://localhost:3000
npm run build              # Production build (automatically excludes PDF page)
npm run generate-pdf       # Creates public/cv.pdf (starts dev server internally)
npm run generate-favicons  # Regenerates favicons + src/web/head/favicons.generated.astro
npm run check             # Runs prettier, astro, and ts checks concurrently
```

**PDF preview workflow** (avoid generate-pdf loop):

1. Visit `http://localhost:3000/pdf` in dev mode
2. Open DevTools Device Mode, set viewport to 794x1122px
3. Edit data files, see live changes
4. Run `npm run generate-pdf` when satisfied

### Build System Quirks

- **Image imports**: Always use `import('@/assets/...')` for auto-optimization (not URLs)
- **PDF page exclusion**: The `prebuild`/`postbuild` rename dance prevents `/pdf` route in production
- **Favicons auto-generation**: Runs on `postinstall` and during build, sources from `config.meta.faviconPath`

## Code Modification Guidelines

### When Editing Data Files

1. **Always preserve the type signature**:
   ```typescript
   } as const satisfies ReadonlyDeep<SectionType>;
   ```
2. **Use helper factories** for skills/links instead of inline objects
3. **Markdown is supported** in description fields (processed by `marked`)
4. **Image ratios matter**: Check JSDoc comments on `image` properties for required aspect ratios

### When Editing Components

- **Web components**: Full feature set, use Tailwind classes
- **PDF components**: Minimal styling, avoid interactive elements, test at A4 dimensions
- **Shared components** (`src/components/`): Used by both web and PDF

### When Creating Data Transformers

Extend `src/data/_internals/transformers.ts` with type-safe patterns:

```typescript
export const hideSkillByName =
  (skillName: string): DataTransformer =>
  (draft) => {
    draft.sections.skills.skillSets.forEach((set) => {
      set.skills = set.skills.filter((s) => s.name !== skillName);
    });
  };
```

## Key Dependencies & Patterns

- **Astro 2.8**: SSG framework, check `.astro` component syntax
- **Immer**: Powers data transformers with immutable updates
- **type-fest**: `ReadonlyDeep<T>`, `Merge<T>` for deep immutability
- **Puppeteer**: PDF generation (headless Chrome)
- **date-fns**: Date formatting, locale from `config.i18n.locale`
- **Iconify**: 100k+ icons via `iconify-icon` web component (`icon` prop format: `prefix:icon-name`)

## Common Pitfalls

- ❌ Don't edit `src/web/head/favicons.generated.astro` manually (auto-generated)
- ❌ Don't use `npm/yarn/pnpm` interchangeably (enforced by `package.json` engines)
- ❌ Don't add routes to `src/pages/` (this is a single-page template)
- ❌ Don't forget `as const satisfies ReadonlyDeep` on data objects (breaks type inference)
- ❌ Don't commit `public/cv.pdf` if generated locally (usually gitignored)

## Project-Specific Conventions

- **Section visibility**: Controlled via `config.visible` in each section's data file
- **Date ranges**: Use `[Date, Date | null]` where `null` = "present"
- **Markdown**: Supported in `description` fields, rendered with `marked` library
- **PDF-specific data**: Use `pdfDetails` property (if available) to override `details` for PDF rendering
- **Link buttons**: Defined via factories in `helpers/links.ts`, always include `url` in override object

## Getting Unstuck

- Check `docs/` folder for detailed guides (setup, PDF generation, data transformation)
- All types in `src/types/` have JSDoc descriptions on properties
- Hover over config properties in your IDE for inline documentation
- For section structure, reference example data in `src/data/sections/*.data.ts`
