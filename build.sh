#!/usr/bin/env bash

# Variables

NGC="./node_modules/.bin/ngc"
ROLLUP="./node_modules/.bin/rollup"
UGLIFYJS="./node_modules/.bin/uglifyjs"

# Clean

rm -rf dist/
rm -rf tmp/

# Inline

rsync -a *.ts ./tmp
node inliner.js

# Build ESM2015

$NGC -p ./tsconfig-esm2015.json
$ROLLUP -c rollup-esm2015.conf.js

# Build ESM5

$NGC -p tsconfig-esm5.json
$ROLLUP -c rollup-esm5.conf.js

# Build UMD

$ROLLUP -c rollup-umd.conf.js
$UGLIFYJS dist/bundles/ngx-example-library.umd.js -c -m -o dist/bundles/ngx-example-library.umd.min.js

# Move Assets

cp -r tmp/esm2015/*.d.ts tmp/esm2015/src tmp/esm2015/*.json package.json README.md dist/
find dist/src -name "*.js" -delete



