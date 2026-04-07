# Inventory Search Project

## Features
- Search by product name (case-insensitive)
- Filter by category
- Filter by price range

## Search Logic
Filters applied sequentially:
1. Name
2. Category
3. Min price
4. Max price

## Improvement
- Add pagination or database indexing for large datasets

## Run
cd backend
npm install
node server.js

Open frontend/index.html