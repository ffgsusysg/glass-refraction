# Contributing to glass-refraction

Thanks for your interest in contributing!

## Development

```bash
git clone https://github.com/moeez-shabbir/glass-refraction.git
cd glass-refraction
npm install
npm run dev   # watch mode
```

## Building

```bash
npm run build
```

Output goes to `dist/`.

## Guidelines

- Keep CSS framework-agnostic (no Tailwind utilities in the core CSS)
- React components should be thin wrappers — all visual logic lives in CSS
- Test changes against the vanilla example (`examples/vanilla/index.html`)
- Use CSS custom properties (`--gr-*`) for any new themeable values

## Pull Requests

1. Fork the repo and create a feature branch
2. Make your changes
3. Run `npm run build` to verify
4. Open a PR with a clear description of what changed and why
