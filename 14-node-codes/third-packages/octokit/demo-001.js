const { Octokit, App, Action } = require("octokit");
const fs = require('fs');
const {TOKEN} = require('./github-token');

// 登录 github
const app = new Octokit({ auth: TOKEN });

(async () => {
  // 获取某个github用户的所有仓库
  const res = await app.rest.repos.listForUser({username: 'wbytts'});
  const myRepos = res.data;

  // 遍历仓库，打印出每个仓库的名称
  for(let repo of myRepos) {
    console.log(repo.full_name);
  }

})();
