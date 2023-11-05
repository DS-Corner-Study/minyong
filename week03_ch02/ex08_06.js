const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("실패"); 
    }, 500);
  });
  
  promise.then(function (res) { 
    console.log(res);
  });