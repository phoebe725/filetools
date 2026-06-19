#!/usr/bin/env bash
# Rebuild and publish the static site to the gh-pages branch.
# Usage:  npm run deploy   (or:  bash deploy.sh)
set -euo pipefail

REPO_URL="https://github.com/phoebe725/filetools.git"

echo "▶ Building static export (root path, custom domain)…"
npm run build

echo "▶ Publishing ./out to gh-pages…"
touch out/.nojekyll
# Custom-domain marker for GitHub Pages. public/CNAME is copied into out/ by the
# build, but re-assert it here so a force-push can never wipe the domain binding.
echo "pdffiletool.xyz" > out/CNAME
# SPA fallback: GitHub Pages serves 404.html for any unmatched path. Next's
# static export already emits one; guarantee it exists so deep links never 404.
[ -f out/404.html ] || cp out/index.html out/404.html
pushd out >/dev/null
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.email="train981316@gmail.com" -c user.name="Phoebe Chao" \
  commit -q -m "Deploy static site"
git push -f "$REPO_URL" gh-pages
rm -rf .git
popd >/dev/null

echo "✅ Deployed → https://pdffiletool.xyz/  (live in ~30–60s)"
