# Portfolio Website

This project is a React + TypeScript + Vite app configured for deployment to GitHub Pages.

## Deploy to GitHub Pages

1. Ensure this repo is pushed to GitHub at:
   `https://github.com/jakewilliamscode/PortfolioWebsite`
2. Install dependencies:
   `npm install`
3. Build and publish:
   `npm run deploy`

The deploy script runs `npm run build` and publishes the `dist/` folder to the `gh-pages` branch.

## GitHub Repository Settings

In GitHub:
1. Open `Settings` -> `Pages`
2. Under `Build and deployment`, set:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` / `/ (root)`
3. Save.

Your site URL will be:
`https://jakewilliamscode.github.io/PortfolioWebsite/`

## Local Preview

Run:
`npm run dev`

## Notes

- `vite.config.ts` uses `/PortfolioWebsite/` as the production base path.
- Routing uses `HashRouter`, which is compatible with GitHub Pages.
