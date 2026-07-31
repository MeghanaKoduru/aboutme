#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch.
# Usage: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE_URL=$(git remote get-url origin)

npm run build

cd dist
git init -q -b gh-pages
git add -A
git -c user.name="deploy" -c user.email="deploy@localhost" commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f -q "$REMOTE_URL" gh-pages
rm -rf .git
echo "Deployed to gh-pages."
