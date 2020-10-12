#!/bin/bash

FILE_NAME="ormconfig.json"

echo "Removing old [$FILE_NAME] and generating new one"

rm -f $FILE_NAME || :