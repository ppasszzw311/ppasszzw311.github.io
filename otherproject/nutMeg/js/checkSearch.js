const checkins = [
  { id:'001', name: '中山', C_date: '2021/09/30', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/29', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/28', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/27', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/26', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/25', C_time: '21:45', catory: '晚班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/30', C_time: '21:45', catory: '早班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/30', C_time: '21:45', catory: '中班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/29', C_time: '21:45', catory: '中班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/29', C_time: '21:45', catory: '早班', cardID: '35454', loyName: '王小明'},
  { id:'001', name: '中山', C_date: '2021/09/27', C_time: '21:45', catory: '中班', cardID: '35454', loyName: '王小明'},
]

const select_name = document.querySelector("#sel_name")
const dataPanel = document.querySelector("#data-panel");

// eventlistener
select_name.addEventListener('change', selector)

function displayCheckinList(checkins) {
  let record = ``
  for (item in checkins) {
    let checkinRecord =`
    <tr>
      <td>${checkins[item].id}</td>
      <td>${checkins[item].name}</td>
      <td>${checkins[item].C_date}</td>
      <td>${checkins[item].C_time}</td>
      <td>${checkins[item].catory}</td>
      <td>${checkins[item].cardID}</td>
      <td>${checkins[item].loyName}</td>
    </tr>
    `
    record += checkinRecord
  }
  dataPanel.innerHTML = record
}

function selector(e) {
  e.preventDefault() //避免reload
  let targetName = e.target.name
  let value = this.value
  
  let filterRecord = []
  if (targetName === "sel_time") {
    console.log(targetName, value)
    filterRecord = checkins.filter((check) => 
                                   check.catory.includes(value))
    console.log(filterRecord)
  }
  displayCheckinList(filterRecord)
}

// dataPanel.innerHTML = displayCheckinList(filterRecord);
