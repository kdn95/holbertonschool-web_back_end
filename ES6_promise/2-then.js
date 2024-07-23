export default function handleResponseFromAPI(promise) {
  const ThePromise = new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({status: 200, body: 'Success',
      });
    } else {
      reject(Error({}));
    }
  });

  // const resp = 'Got a response from the API'

  ThePromise.then(function(resolve) {
    console.log('Got a response from the API');
  }, function(reject) {
    console.log('Got a response from the API');
  });

}