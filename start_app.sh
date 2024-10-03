#!/bin/bash

echo "Starting front-end server..."
gnome-terminal --command "cd $PWD && npm install && npm start"

echo "Starting back-end server..."
gnome-terminal --command "cd $PWD/server && npm install && npm start"

echo "Opening app in browser..."
xdg-open "http://localhost:3000"
