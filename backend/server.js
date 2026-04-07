const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const inventory = require('./data');

app.get('/search', (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let result = [...inventory];

  // invalid price range
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  // name filter
  if (q) {
    result = result.filter(item =>
      item.productName.toLowerCase().includes(q.toLowerCase())
    );
  }

  // category filter
  if (category) {
    result = result.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  // min price
  if (minPrice) {
    result = result.filter(item => item.price >= Number(minPrice));
  }

  // max price
  if (maxPrice) {
    result = result.filter(item => item.price <= Number(maxPrice));
  }

  res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));