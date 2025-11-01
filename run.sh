#!/usr/bin/env bash
# Run locally with node http-server (npx)
set -e
echo "Installing dependencies (if any)..."
npm ci --silent || true
echo "Starting static server at http://localhost:8080"
npx http-server src -p 8080
