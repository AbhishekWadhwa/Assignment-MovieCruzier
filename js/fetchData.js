
export default function XMLHTTPData(url) {
  return new Promise((resolve, reject) => {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
      if (ourRequest.status === 200) {
        const json = JSON.parse(ourRequest.responseText);
        resolve(json.results);
      } else {
        reject(new Error('DATA NOT FOUND'));
      }
    };
    ourRequest.onerror = function () {
      reject(new Error('There is some error!Check it'));
    };
    ourRequest.send();
  });
}
