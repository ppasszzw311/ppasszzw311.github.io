let selitems = [
  { id: 1, catory: "檳榔", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 2, catory: "檳榔", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 3, catory: "檳榔", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 4, catory: "檳榔", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 5, catory: "檳榔", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 6, catory: "香菸", name: "七星", total_sell: 0, give: 0, total: 0 },
  { id: 7, catory: "香菸", name: "長壽", total_sell: 0, give: 0, total: 0 },
  { id: 8, catory: "香菸", name: "寶馬", total_sell: 0, give: 0, total: 0 },
  { id: 9, catory: "香菸", name: "藍星", total_sell: 0, give: 0, total: 0 },
  { id: 10, catory: "香菸", name: "紅葉", total_sell: 0, give: 0, total: 0 },
  { id: 11, catory: "飲料", name: "礦泉水", total_sell: 0, give: 0, total: 0 },
  { id: 12, catory: "飲料", name: "結冰水", total_sell: 0, give: 0, total: 0 },
  { id: 13, catory: "飲料", name: "保力達", total_sell: 0, give: 0, total: 0 },
  {
    id: 14,
    catory: "飲料",
    name: "維他露Ｐ",
    total_sell: 0,
    give: 0,
    total: 0
  },
  { id: 15, catory: "飲料", name: "沙士", total_sell: 0, give: 0, total: 0 }
];

const catory = ["檳榔", "香菸", "飲料"];
const d = document.querySelector("#datetime");
const nut = document.querySelector("#nut");
const smoke = document.querySelector("#smoke");
const drink = document.querySelector("#drink");

// showtime
console.log(ShowTime());

//
// const tex = document.querySelectorAll("#very");
// tex.addEventListener("blur", function (e) {
//   let value = this.value;
//   console.log("value");
// });


// reder table
function displaySellList(selitems, c) {
  let list = ``;
  selitems = selitems.filter((check) => check.catory.includes(c));
  for (item in selitems) {
    let itemList = `
    <tr data-id="id-${selitems[item].id}">
      <td>${selitems[item].name}</td>
      <td><input class="form-control" type="number" id="very" value="${selitems[item].total_sell}"></td>
      <td><input class="form-control" type="number" value="${selitems[item].give}"></td>
      <td>${selitems[item].total}</td>
    </tr>
    `;
    list += itemList;
  }
  // console.log(list)
  // nut.innerHTML = list;
  return list;
}

// run
nut.innerHTML = displaySellList(selitems, catory[0]);
smoke.innerHTML = displaySellList(selitems, catory[1]);
drink.innerHTML = displaySellList(selitems, catory[2]);

// show now
function ShowTime() {
  let NowDate = new Date();
  let Y = NowDate.getFullYear();
  let M = zeroTen(NowDate.getMonth() + 1);
  let D = zeroTen(NowDate.getDate());
  let h = zeroTen(NowDate.getHours());
  let m = zeroTen(NowDate.getMinutes());
  let s = zeroTen(NowDate.getSeconds());
  let time = `時間： ${Y}/${M}/${D} ${h}:${m}:${s}`;
  d.innerHTML = time;
  setTimeout("ShowTime()", 1000);
}

// add zero
function zeroTen(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
