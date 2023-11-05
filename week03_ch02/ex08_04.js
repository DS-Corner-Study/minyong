function filterThisMonth(pivotDate, dateArray) {  // ①
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();
  
    const startDay = new Date(year, month, 1, 0, 0, 0, 0); // ②
    const endDay = new Date(year, month + 1, 0, 23, 59, 59); // ③
  
    const resArr = dateArray.filter(
      (it) =>
        startDay.getTime() <= it.getTime() && // ④
        it.getTime() <= endDay.getTime()
    );
    return resArr;
  }
  
  const dateArray = [
    new Date("2000-10-1"),
    new Date("2000-10-31"),
    new Date("2000-11-1"),
    new Date("2000-9-30"),
    new Date("1900-10-11")
  ];
  
  const today = new Date("2000-10-10/00:00:00"); // 오늘은 2000년 10월 10일이라고 가정합니다.
  const filteredArray = filterThisMonth(today, dateArray);
  
  console.log(filteredArray);
  
  // 0: Sun Oct 01 2000 00:00:00 GMT+0900 (한국 표준시)
  // 1: Tue Oct 31 2000 00:00:00 GMT+0900 (한국 표준시)