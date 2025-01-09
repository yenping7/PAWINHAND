const x = document.querySelector("button");
let btn = document.querySelector("button");
btn,
  x.addEventListener("click", function () {
    let answer = document.getElementById("answer").value;
    if (answer == "沒有煙") {
      alert("答對了！！好吧那你應該不是機器人");
      alert(
        "Hello," +
          document.getElementById("Account").value +
          "收到您的資訊囉！記若您接獲通知 PAWINHAND 訂單有「信用卡誤簽分期」、「款項錯誤」、「訂購數量錯誤」等問題，需進行「ATM自動櫃員機操作」、「補繳金額」、「變更付款方式」、「提供刷卡資訊」等，皆是現在流行的詐騙手法，請小心勿受騙上當，切記提高警覺冷靜查詢，並向165反詐騙電話查證，以確保安全。提醒您， 本平台不會以任何理由要求客戶操作ATM變更訂單付款設定，如接獲疑似詐騙電話，請不要依指示操作，若有任何疑問，請直接與客服聯絡。"
      );
    } else {
      alert("太認真了吧你～電動火車沒有煙啦！（請回答：沒有煙）");
    }
  });
