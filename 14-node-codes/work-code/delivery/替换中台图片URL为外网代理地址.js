
/**
 * http://10.32.229.118:8090/platform/......
 * @param {*} url
 */
function replaceURL(url) {
  return url.replace(/(.*)platform/, 'http://183.207.195.123/platform')
}


const old_url = "http://10.32.229.118:8090/platform/canteen/image/20210430/20210430003036400.jpg";
const new_url = replaceURL(old_url);
console.log(new_url);
