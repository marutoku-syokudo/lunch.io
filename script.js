// 現在の時刻を取得
var currentTime = new Date();
var currentHour = currentTime.getHours();

// 明日の日付を計算
var tomorrow = new Date();
tomorrow.setDate(currentTime.getDate() + 1);

// 要素A、要素B、要素Cを取得
var elementA = document.getElementById("elementA");
var elementB = document.getElementById("elementB");
var elementC = document.getElementById("elementC");

// 要素Aの日付を設定
var elementADate = document.getElementById("elementADate");
elementADate.textContent = formatDateWithoutYear(tomorrow);

// 要素Aの内容を設定
var elementAContent = document.getElementById("elementAContent");
elementAContent.textContent = formatDateWithoutYear(tomorrow) + "分の注文受付中";



// 要素Bの日付を設定
var elementBDate = document.getElementById("elementBDate");
elementBDate.textContent = formatDateWithoutYear(currentTime);

// h1要素の日付を非表示にする
elementBDate.style.display = "none";

// 要素Bの内容を設定
var elementBContent = document.getElementById("elementBContent");
elementBContent.textContent = formatDateWithoutYear(currentTime) + "当日の注文受付中";



// ボタンCのテキストを設定

//var buttonC = document.getElementById("buttonC");
//buttonC.textContent = "文章 " + formatDateWithoutYear(currentTime) + " 文章";

// 要素Cの内容を設定
var elementCContent = document.getElementById("elementCContent");
elementCContent.textContent = " " + formatDateWithoutYear(tomorrow) + "分の注文受付は17時～開始します。 ";

// 時間帯によって要素を表示または非表示にする
if (currentHour >= 17 && currentHour < 24) {
  // 17時から24時の間
  elementA.style.display = "block"; // 要素Aを表示
  elementB.style.display = "none";  // 要素Bを非表示
  elementC.style.display = "none";  // 要素Cを非表示
} else if (currentHour >= 0 && currentHour < 9) {
  // 24時から9時の間
  elementA.style.display = "none";  // 要素Aを非表示
  elementB.style.display = "block"; // 要素Bを表示
  elementC.style.display = "none";  // 要素Cを非表示
} else {
  // それ以外の時間
  elementA.style.display = "none";  // 要素Aを非表示
  elementB.style.display = "none";  // 要素Bを非表示
  elementC.style.display = "block"; // 要素Cを表示
}

// 日付をフォーマットする関数（年なし）
function formatDateWithoutYear(date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return month + "月" + day + "日";
}
