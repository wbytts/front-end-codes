const fs = require('fs');

/*
fs.readFile('xxx', (err, buf) => {
    if(err) { // 如果失败，则抛出错误
        throw err;
    }
    // 如果没有出错，则输出内容
    console.log(buf.toString())
});
*/

const p = new Promise(function(resolve, reject) {
    fs.readFile('./a.md', (err, buf) => {
        if(err) { // 如果出错
            reject(err);
        }
        // 如果没有出错
        resolve(buf);
    });
});

p.then(function(value){
    console.log('成功:', value.toString());
}, function(reason){
    console.log('失败:', reason);
});
