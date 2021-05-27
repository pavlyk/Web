async function f() {

    const promise = await fetch('https://yandex.ru', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer' // no-referrer, *client
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
    console.log(promise); // "готово!"  

    const result = await promise; // будет ждать, пока промис не выполнится (*)
  
    console.log(result); // "готово!"

    const res1 = 5;

    const res2 = await res1;

    console.log(res2);

  }
  
  f();