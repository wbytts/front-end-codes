/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 18:33:11
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 18:57:02
 */

function axios({ method, url, params, data }) {
    // 转化为大写
    method = method.toUpperCase();
    // 返回值
    return new Promise((resolve, reject) => {
        // 四步骤
        // 1.创建对象
        const xhr = new XMLHttpRequest();
        // 2.初始化
        // 处理 params 对象 a=100&b=200
        let str = ''
        for (let k in params) {
            str += `${k}=${params[k]}&`;
        }
        str = str.slice(0, -1);
        xhr.open(method, `${url}?${str}`);
        // 3.发送
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            // Content-type mime类型设置 
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        // 设置响应结果类型为 json
        xhr.responseType = 'json';
        // 4.处理结果
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // 判断响应状态码
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 成功的状态
                    resolve({
                        status: xhr.status,
                        message: xhr.statusText,
                        body: xhr.response
                    })
                } else {
                    reject(new Error('请求失败,失败的状态码为' + xhr.status));
                }
            }
        }
    })
}

axios.get = function(url, options) {
    // 发送 AJAX 请求 GET
    return axios(Object.assign(options, { method: 'GET', url: url }));
}


axios.post = function(url, options) {
    // 发送 AJAX 请求 GET
    return axios(Object.assign(options, { method: 'POST', url: url }));
}

axios.put = function(url, options) {
    // 发送 AJAX 请求 GET
    return axios(Object.assign(options, { method: 'PUT', url: url }));
}

axios.delete = function(url, options) {
    // 发送 AJAX 请求 GET
    return axios(Object.assign(options, { method: 'delete', url: url }));
}