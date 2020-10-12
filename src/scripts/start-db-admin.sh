#!/bin/bash
set -e

CONTAINER="postgres-admin";
DEFAULT_EMAIL="admin@admin.com";
DEFAULT_PASSWORD="qwerty";
DEFAULT_PORT="80";

echo "Removing old container [$CONTAINER] and starting new fresh instance of [$CONTAINER]"
(docker kill $CONTAINER || :) && \
  (docker rm $CONTAINER || :) && \
  docker run --name $CONTAINER -e PGADMIN_DEFAULT_EMAIL=$DEFAULT_EMAIL \
  -e PGADMIN_DEFAULT_PASSWORD=$DEFAULT_PASSWORD \
  -e PGADMIN_LISTEN_PORT=$DEFAULT_PORT \
  -p 5433:$DEFAULT_PORT \
  -d dpage/pgadmin4