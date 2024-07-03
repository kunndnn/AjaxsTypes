let btn = document.getElementById("fetchRun");
btn.addEventListener("click", function () {
  console.log("clicked");
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);

      let table = document.getElementById("table"),
        info = "<tr><th>title<th>description<th>price<th>discount %</tr>";
      data.products.forEach((element) => {
        info += `<tr><td>${element.title}</td><td>${element.description}</td><td>${element.price}</td><td>${element.discountPercentage}</td></tr>`;
      });
      table.innerHTML = info;
    })
    .catch((error) => console.error("Error:", error));
});
