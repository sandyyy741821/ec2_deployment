#!/bin/bash
pkill node || true

npm run build

nohup npm start > app.log 2>&1 &

exit 0
