let btn = document.getElementById("axiosRun");
btn.addEventListener("click", function () {
  console.log("clicked");
  axios.get("https://dummyjson.com/products").then(function (res) {
    console.log(res.data.products);

    let table = document.getElementById("table"),
      info = "<tr><th>title<th>description<th>price<th>discount %";
    res.data.products.forEach((element) => {
      // document.write(element.title, "\n");
      info += `<tr><td>${element.title}<td>${element.description}<td>${element.price}<td>${element.discountPercentage}`;
    });
    table.innerHTML = info;
  });
});
