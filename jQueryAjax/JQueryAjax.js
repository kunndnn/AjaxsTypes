$().ready(() => {
  console.log("hello");
  $("#ajaxRun").click(function () {
    $.get("https://dummyjson.com/products", function (data, status) {
      // data=JSON.parse(data)
      console.log(status);
      console.log(data.products);
      let table = document.getElementById("table");

      let info = "<tr><th>title<th>description<th>price<th>discount %";
      data.products.forEach((element) => {
        // document.write(element.title, "\n");
        info += `<tr><td>${element.title}<td>${element.description}<td>${element.price}<td>${element.discountPercentage}`;
      });
      table.innerHTML = info;
      //   console.log("Data: " + data + "\nStatus: " + status);
    });

    // $.post(
    //   "/url",
    //   {
    //     name: "Donald Duck",
    //     city: "DuckBurg",
    //   },
    //   function (data, status) {
    //     alert("Data: " + data + "\nStatus: " + status);
    //   }
    // );
  });
  //   $.ajax({
  //     url: "/ajax",
  //     method: "GET",
  //     success: function (data) {
  //       $("#result").text(data);
  //     },
  //     error: function (err) {
  //       console.error(err);
  //     },
  //   });
});
