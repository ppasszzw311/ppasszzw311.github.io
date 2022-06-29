const showtime = document.querySelector(".showtime")

ShowTime()
// show now
function ShowTime() {
  let NowDate = new Date()
  let Y = NowDate.getFullYear()
  let M = zeroTen(NowDate.getMonth()+1) 
  let D = zeroTen(NowDate.getDate())
  let h = zeroTen(NowDate.getHours())
  let m = zeroTen(NowDate.getMinutes())
  let s = zeroTen(NowDate.getSeconds())
  let time = `${Y}年 ${M}月 ${D}日 ${h}:${m}:${s}`
  showtime.innerHTML = time
  setTimeout('ShowTime()', 1000)
}

function zeroTen(number) {
  if (number < 10) {
    return '0' + number
  } else {
    return number
  }
}



var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line', //圖表類型
    data: {
      //標題
      labels: ['Red', 'Blue', 'Yellow', 'Green','Purple','Purple','Purple','Purple', 'Purple', 'Orange'],
      datasets: [{
        label: '# test', //標籤
        data: [12, 19, 3, 5, 2, 3,57,7,75,55], //資料
        //圖表背景色
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        //圖表外框線色
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        //外框線寬度
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            responsive: true //符合響應式
          }
        }]
      }
    }
  });