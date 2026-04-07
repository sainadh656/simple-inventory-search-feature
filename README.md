# Inventory Search Project

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Data Source: Static JSON (in-memory array)

## Features
- Search products by name (case-insensitive)
- Filter by category
- Filter by price range (range slider)
- Combine multiple filters
- Display results in a clean list UI
- Show "No results found" when empty
- Mobile-responsive modern UI

## Search Logic
Filters applied sequentially:
1. Name
2. Category
3. Min price
4. Max price

## Improvement
- Add pagination or database indexing for large datasets

## Run
- cd backend
- npm install
- node server.js

Open frontend/index.html

## Screenshots

![App Screenshot](https://res.cloudinary.com/dzu98c3fj/image/upload/v1775582951/Screenshot_1.png)

![App Screenshot](https://res.cloudinary.com/dzu98c3fj/image/upload/v1775582952/Screenshot_2.png)

![App Screenshot](https://res.cloudinary.com/dzu98c3fj/image/upload/v1775582965/Screenshot_3.png)

![App Screenshot](https://res.cloudinary.com/dzu98c3fj/image/upload/v1775582966/Screenshot_4.png)
