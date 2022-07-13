#!/bin/bash
deno run --allow-read --allow-env example/example1.ts > spec.json && cat spec.json