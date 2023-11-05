const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("성공");
  }, 500);
});

promise.then(function (res) { 
  console.log(res);
});

// 성공