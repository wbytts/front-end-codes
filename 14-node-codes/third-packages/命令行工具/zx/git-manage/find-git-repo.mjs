import fs from 'fs';

let BASE_PATH = 'E:/my-projects'

cd(BASE_PATH)
// let res = await $`ls`
// console.log('res=', res)

let content = await fs.readFile('./find-git-repo.mjs')
console.log(content)
