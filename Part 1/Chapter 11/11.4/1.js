new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(console.log); // Нет, промис не обрабатывает ошибку т.к. она происходит после выполнения кода