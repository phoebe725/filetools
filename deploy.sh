#!/usr/bin/env bash
# Rebuild and publish the static site to the gh-pages branch.
# Usage:  npm run deploy   (or:  bash deploy.sh)
set -euo pipefail

REPO_URL="https://github.com/phoebe725/filetools.git"

echo "▶ Building static export (with GitHub Pages base path)…"
GITHUB_PAGES=true npm run build

echo "▶ Publishing ./out to gh-pages…"
touch out/.nojekyll
pushd out >/dev/null
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.email="train981316@gmail.com" -c user.name="Phoebe Chao" \
  commit -q -m "Deploy static site"
git push -f "$REPO_URL" gh-pages
rm -rf .git
popd >/dev/null

echo "✅ Deployed → https://phoebe725.github.io/filetools/  (live in ~30–60s)"
