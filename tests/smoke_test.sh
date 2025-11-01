#!/usr/bin/env bash
# Basic smoke test: check index.html exists and contains title
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="$ROOT/src/index.html"
if [ ! -f "$FILE" ]; then
  echo "ERROR: $FILE missing"
  exit 2
fi

if grep -q "<title>Veolve — Coming Soon</title>" "$FILE"; then
  echo "OK: title present"
else
  echo "ERROR: title not found in $FILE"
  exit 3
fi

echo "SMOKE TEST PASSED"
