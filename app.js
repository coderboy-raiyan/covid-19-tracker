const tabel = document.querySelector(".table");
const tbody = document.createElement("tbody");
function getData() {
  fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then((res) => res.json())
    .then((data) => {
      return showDataTabel(data);
    });
}

let count = 1;

function showDataTabel(data) {
  data.forEach((caseItem) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    th.setAttribute("scope", "row");
    th.innerHTML = count++;

    td1.innerHTML = caseItem.country;
    td2.innerHTML = caseItem.todayCases;
    td3.innerHTML = caseItem.todayDeaths;
    td4.innerHTML = caseItem.recovered;
    td5.innerHTML = caseItem.active;

    if (caseItem.todayDeaths >= 100) {
      td3.classList.add("table-danger");
    } else if (caseItem.recovered <= 20000) {
      td4.classList.add("table-success");
    } else if (caseItem.todayCases <= 763) {
      td2.classList.add("table-warning");
    }

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);
    tabel.appendChild(tbody);
  });
}
getData();
console.log(tbody);
