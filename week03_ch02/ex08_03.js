function moveMonth(date, moveMonth) { // ①
    const curTimestamp = date.getTime(); // ②
    const curMonth = date.getMonth(); // ③
  
    const resDate = new Date(curTimestamp); // ④
    resDate.setMonth(curMonth + moveMonth); //⑤
  
    return resDate;
  }
  
  const dateA = new Date("2000-10-10");
  console.log("A: ", dateA); // A : Tue Oct 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateB = moveMonth(dateA, 1);
  console.log("B: ", dateB); // B : Fri Nov 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateC = moveMonth(dateA, -1);
  console.log("C: ", dateC); // C : Sun Sep 10 2000 09:00:00 GMT+0900 (한국 표준시)