#!/usr/bin/env bash

# Exit immediately if a command fails
set -e

BUCKET_NAME="${1:-${AWS_S3_BUCKET:-lingoberg.com}}"
CLOUDFRONT_ID="${2:-${AWS_CLOUDFRONT_DISTRIBUTION_ID:-}}"

echo "🚀 Building fresh Lingoberg static export..."
bun run build

echo "📦 Syncing ./out to s3://${BUCKET_NAME}..."
aws s3 sync out/ "s3://${BUCKET_NAME}" --delete

if [ -n "$CLOUDFRONT_ID" ]; then
  echo "🔄 Invalidating CloudFront cache for distribution: ${CLOUDFRONT_ID}..."
  aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*"
fi

echo "✅ Lingoberg static deployment complete!"
