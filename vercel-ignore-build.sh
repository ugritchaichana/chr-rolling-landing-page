#!/bin/bash

# Vercel Ignored Build Step Script
# This script tells Vercel which branches it should build.
# Exit code 1 means "Proceed with the build"
# Exit code 0 means "Cancel the build"

echo "Current branch being deployed: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == "dev" || "$VERCEL_GIT_COMMIT_REF" == "dev-booth" || "$VERCEL_GIT_COMMIT_REF" == "dev-ryu" || "$VERCEL_GIT_COMMIT_REF" == "dev-naja" || "$VERCEL_GIT_COMMIT_REF" == "dev-got" ]]; then
  echo "✅ Allowed branch detected. Build can proceed."
  exit 1
else
  echo "🛑 Ignored branch detected. Build canceled."
  exit 0
fi
