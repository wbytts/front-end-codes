const moment = require('moment');


/*
支持的写法：
    moment();
    //* 函数参数在未传入时默认为 undefined；Moment 会将 moment(undefined) 视作 moment()
    moment(undefined);
    //* 从 2.14.0 开始，也受支持。
    moment([]);
    moment({});
*/

// 要获取当前的日期和时间，只需调用不带参数的 moment() 即可
const m = moment();

