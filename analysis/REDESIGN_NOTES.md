# UI redesign baseline

This repository now includes a small design system pass inspired by calm therapy site layouts: soft neutrals, rounded shapes and gentle depth.

What changed
- Tailwind now reads color tokens from raw CSS variables (var(--...)) so hex values in globals.css work as-is.
- Added Container primitive for consistent page width and horizontal padding.
- Softened Card styles (rounded-2xl, subtle border, backdrop blur) to match the desired aesthetic.
- Added a `pill` Button variant and slightly larger `lg` size for prominent CTAs.
- Header was restyled into a rounded, blurred bar with improved contrast.
- Home page now uses Container for consistent spacing and removes duplicate scroll-progress instance.

Design tokens
Tokens live in `src/app/globals.css` under `:root` and `.dark`.

- Colors: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, etc.
- Semantic extensions: `--sage`, `--sand`, `--coral`, `--primary-soft`, `--primary-dark`.
- Radius: `--radius` controls component rounding.

Usage examples
- Container: wrap page content
  <Container>
    ...
  </Container>

- Button: pill CTA
  <Button variant="pill" size="lg">Book a FREE consultation</Button>

- Card: soft info blocks
  <Card>
    <CardHeader>...</CardHeader>
    <CardContent>...</CardContent>
  </Card>

Next steps (suggested)
- Apply Container to sub-sections (About, Services, Testimonials) and simplify spacing.
- Introduce a `Section` component with standardized vertical rhythm and optional wave/organic dividers.
- Replace ad-hoc color classes with semantic ones (primary/secondary/sage/sand) for consistency.
- Add a `HeroMedia` block with curved image corners and tag pills (see inspiration).