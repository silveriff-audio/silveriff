#!/bin/bash

# Step 1: Start Vite in dev mode in the background
echo "Starting Vite for frontend..."
cd ui

yarn dev &
VITE_PID=$! # Save the PID of Vite to kill it later if needed

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

# Step 4: Clean up Vite process when stopping the script
if ps -p $VITE_PID > /dev/null
then
   echo "Stopping Vite (PID: $VITE_PID)"
   kill $VITE_PID
else
   echo "Vite process $VITE_PID already stopped."
fi