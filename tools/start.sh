#!/bin/bash

# Step 1: Build the frontend (React) inside the ui directory.
echo "Building frontend..."
cd ui

# Run the build or development build. Use yarn build for production or yarn dev for faster dev build.
yarn build
# OR
# yarn dev

cd ..

# Step 2: Check if Air is installed in the local bin directory
if [ ! -f "./bin/air" ]; then
    echo "Air not found in ./bin/air. Installing Air..."
    GOBIN=$(pwd)/bin go install github.com/air-verse/air@latest
else
    echo "Air is already installed in ./bin/air"
fi

# Step 3: Run Air from the local bin directory
echo "Starting Air..."
pwd
./bin/air -c air.toml