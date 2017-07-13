// Rough implementation. Untested.
export function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const error = {
        response: { /* changes as per AXIOS error response */
          status: 599, /* https://httpstatuses.com/599 */
          data: 'Unable to connect! Please check your internet connection and try again.'
        }
      };

      reject(error);
    }, ms);
    promise.then(resolve, reject);
  });
}