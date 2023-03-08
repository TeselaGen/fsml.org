#!/bin/bash
deno run --allow-read --allow-env ./example/generateSchema.ts > ./fsml-schema.json && cat ./fsml-schema.json
