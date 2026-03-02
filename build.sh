#!/bin/bash

set -e

pnpm run docs:build

# Install gopeed-js
git clone --depth=1 https://github.com/GopeedLab/gopeed-js .gopeed-js
cd .gopeed-js
rm -rf .git
pnpm install
pnpm run build
