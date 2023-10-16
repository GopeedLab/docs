#!/bin/bash

set -e

pnpm run docs:build

# Install gopeed-js
git clone --depth=1 https://github.com/GopeedLab/gopeed-js .gopeed-js
cd .gopeed-js
rm -rf .git
pnpm install
pnpm run build

# Build gopeed-js API Reference Document
pnpm run docs
# Copy dist to /docs/public/site/reference
cp -r docs/* ../docs/public/site/reference/

# Build gopeed-js OpenAPI sepc
cd packages/gopeed-openapi
pnpm run build
# Copy swagger.json to /docs/public/site/openapi
cp build/swagger.json ../../../docs/public/site/openapi/