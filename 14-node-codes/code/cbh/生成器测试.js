function * moneyGen() {
  let count = 0;
  while(true) {
    yield count * 100 + 88;
    count++;
  }
}

let mg = moneyGen();

console.log(mg.next())
