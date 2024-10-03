@echo off

echo Starting front-end server...
start cmd /k "cd /d %~dp0 && npm install && npm start"

echo Starting back-end server...
start cmd /k "cd /d %~dp0server && npm install && npm start"

echo Opening app in browser...
start "" "http://localhost:3000"
