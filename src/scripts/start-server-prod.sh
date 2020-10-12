#!/bin/bash

set -e
set -x

if [ "$RUN_MIGRATIONS" ]; then
  echo "Running migrations...";
  npm run typeorm:migration:run
fi

echo "Server is starting...";
npm run start:prod