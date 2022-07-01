const res = require('./data.js');
const moment = require('moment');

const bizData = res.biz_data;

const simpleData = bizData.map(item => {
  let result = {};
  result.date = item.SwipingCardDate.text;
  result.start = item.ActualForFirstCard?.text;
  result.end = item.ActualForLastCard?.text;
  return result;
});

let totalHours = 0;
for (let i = 0; i < simpleData.length; i++) {
  const item = simpleData[i];
  // 休息日
  if (item.start === undefined && item.end === undefined) {
    console.log(`${item.date}\t休息`);
    continue;
  }
  // 加班到第二天
  if (item.start !== undefined && item.end === undefined) {
  }
  const startTime = moment(item.start, 'YYYY/MM/DD HH:mm:ss').hour(18).minute(0).second(0).millisecond(0);
  const endTime = moment(item.end, 'YYYY/MM/DD HH:mm:ss');
  const minutes = moment.duration(endTime.diff(startTime)).as('minutes');
  const hours = minutes / 60;
  console.log(`${item.date}\t上班时间:${item.start}\t下班时间:${item.end}\t加班时长:${minutes}分钟 ===> ${hours}小时`);
}
