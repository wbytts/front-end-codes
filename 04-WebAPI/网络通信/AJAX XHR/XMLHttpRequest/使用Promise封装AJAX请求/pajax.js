(function (window) {
  const yang = {
    ajax: {
      get(url) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url);
          xhr.send();
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
              } else {
                reject(xhr.status);
              }
            }
          };
        });
      },
      post(url) {},
    },
  };

  window.yang = yang;
})(window);
