console.log("hello world");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("clicked");
  const xhr = new XMLHttpRequest();
  //   xhr.open("get", "file.txt", true); //true is async/sync or unblock/block request
  //   xhr.open("get", "https://jsonplaceholder.typicode.com/todos/1", true); //true is async/sync or unblock/block request
  xhr.open("post", "https://dummy.restapiexample.com/api/v1/create", true); //true is async/sync or unblock/block request
  // xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded')
  xhr.getResponseHeader("Content-type", "application/json"); //for json type
  //on progress
  xhr.onprogress = function () {
    console.log("on progress");
  };

  //on ready state
  //   xhr.onreadystatechange = function () {
  //     console.log("on ready state", xhr.readyState);
  //   };
  //after response ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText, "the response");
    } else {
      console.log("some error occur");
    }
  };
  //send the request
  params = { name: "nyName", salary: "150", age: "23" };
  xhr.send(params);
}

let popBtn = document.getElementById("populate");
popBtn.addEventListener("click", popHandler);
function popHandler() {
  console.log("populate clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://dummy.restapiexample.com/api/v1/employees", true);
  console.log("on progress");

  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj.data[0]);
      let list = document.getElementById("list");
      str = "";
      obj.data.forEach((element) => {
        str += `<li>${element.employee_name}</li>`;
      });
      //   for (const key in obj.data) {
      //     str += `<li>${obj.data[key]}</li>`;
      //   }
      list.innerHTML = str;

      let table = document.getElementById("table");
      tr = "<tr><th>id</th><th>name</th><th>salary</th><th>age</th></tr>";
      obj.data.forEach((element) => {
        tr += `<tr><td>${element.id}</td><td>${element.employee_name}</td><td>${element.employee_salary}</td><td>${element.employee_age}</td>`;
      });
      //   console.log(tr, "the table rows");
      table.innerHTML = tr;
    } else {
      console.log("some error occur");
    }
  };
  //send the request
  xhr.send();
  console.log("done fetching list");
}
