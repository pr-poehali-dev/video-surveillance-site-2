#!/bin/bash

# Test script for telegram-notify backend function
# Usage: bash test-telegram-notify.sh

FUNCTION_URL="https://functions.poehali.dev/49fd8cf9-7011-40b3-b464-b25be639eb3a"

echo "🚀 Testing telegram-notify function..."
echo "📍 URL: $FUNCTION_URL"
echo ""
echo "================================================================================================"
echo ""

curl -v -X POST "$FUNCTION_URL" \
  -H "Content-Type: application/json" \
  -d '{
  "name": "Test User",
  "phone": "+7 999 123 4567",
  "message": "Test message"
}'

echo ""
echo ""
echo "================================================================================================"
