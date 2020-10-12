#!/usr/bin/env bash
set -e

SERVER="cms-database";
PW="p2FXF1nTqvpe5plj";
DB="main";

echo "Removing old container [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

echo "Waiting for [$SERVER] to start";
SLEEP 5;

echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres