#!/bin/bash

echo "Running database migrations..."
npx sequelize db:migrate

echo "Running database seeds..."
npx sequelize db:seed:all || true

echo "Starting application..."
node dist/server.js
