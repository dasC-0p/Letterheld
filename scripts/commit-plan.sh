#!/usr/bin/env sh
set -eu
cat <<'EOF'
Deze download bevat de geconsolideerde eindstaat. Maak één commit van deze eindstaat met:
  git add .
  git commit -m "feat: complete Letterheld web app through package 28"
  git tag -a v1.0.0 -m "Letterheld 1.0.0"
Voor historische commits per pakket zijn echte tussenstaten nodig; zie docs/PAKKET-EN-COMMITLOG.md.
EOF
