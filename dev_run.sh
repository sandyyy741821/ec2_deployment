#!/bin/bash

# Optional: stop existing node processes if needed
pkill node || true

# Run build if necessary (or skip if already built)
npm run build

# Start your app in the background detached from terminal
nohup npm start > app.log 2>&1 &

# Exit script immediately
exit 0
