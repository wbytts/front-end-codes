const fs = require('fs');

fs.watch('F:\\RE\\data\\roamedit-nk19692-node.json', () => {
  console.log('发生改变...');
  // 读取文件内容，添加外括号，并写入新文件中去
  fs.readFile('F:\\RE\\data\\roamedit-nk19692-node.json', 'utf8', (err, data) => {
    let jsonObj = {
      nodes: JSON.parse(data)
    };
    console.log(jsonObj);
    fs.writeFileSync('F:\\RE\\data\\default-node-info.json', JSON.stringify(jsonObj).toString('utf8'));
  });
});
