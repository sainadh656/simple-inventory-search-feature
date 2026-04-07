const minSlider = document.getElementById("minPrice");
const maxSlider = document.getElementById("maxPrice");

const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

minSlider.oninput = () => minValue.innerText = minSlider.value;
maxSlider.oninput = () => maxValue.innerText = maxSlider.value;

async function search() {
  const q = document.getElementById("q").value;
  const category = document.getElementById("category").value;
  const minPrice = minSlider.value;
  const maxPrice = maxSlider.value;

  if (Number(minPrice) > Number(maxPrice)) {
    alert("Invalid price range");
    return;
  }

  const url = `http://localhost:5000/search?q=${q}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  const res = await fetch(url);
  const data = await res.json();

  const div = document.getElementById("results");

  if (data.length === 0) {
    div.innerHTML = `<p style="color:white;text-align:center;">No results found</p>`;
    return;
  }

  div.innerHTML = `
    <ul class="result-list">
      ${data.map(item => `
        <li class="result-item">
          <strong>${item.productName}</strong><br/>
          Category: ${item.category}<br/>
          Price: ₹${item.price}<br/>
          Supplier: ${item.supplier}
        </li>
      `).join("")}
    </ul>
  `;
}