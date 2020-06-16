function retrieveJson() {
  return $.ajax({
    url: 'https://favqs.com/api/quotes',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    headers: {
        Authorization: 'Token token="5247b5b7d69d202c7c708d32402940b6"'
    },
    success: function (result) {
      return result;
    },
    error: function (error) {
      console.log(error);
    }
  });
}

async function retrieveQuotes() {
  const promise = new Promise((resolve, reject) => {
    resolve(retrieveJson());
  });
  let result = await promise;
  let quotesArr = promise.then(result => {
    let quotes = result.quotes.map((item, index) => {
      return ({
        text: item.body,
        author: item.author
      });
    });
    return quotes;
  });
  return quotesArr;
}

