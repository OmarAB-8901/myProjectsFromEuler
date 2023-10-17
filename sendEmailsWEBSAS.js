
(() => {
  let emails = ['oanaya@sinci.com', 'ngcruz@sinci.com', 'mverduzco@sinci.com', 'aflores@sinci.com', 'apadilla@sinci.com'];

  for (let i = 0; i < emails.length; i++) {

    let headers = {
      method: 'POST',
      body: JSON.stringify({ "email": emails[i], "body": "usted a sido hackeado por arturo" }),
      headers: {
        "content-type": "application/json; charset=utf-8"
      }
    };

    fetch('http://10.10.102.24/api/emails/index', headers);
  }
})()