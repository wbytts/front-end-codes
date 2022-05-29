const fetch = require('node-fetch');

fetch("http://localhost:8080/zb-public/projectBaseNew/saveOrUpdateProjectBaseInfo", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "tokenid": "zb_public:66e73bf7-12a8-4d00-8295-045594c3af76",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "JSESSIONID=zb_public:66e73bf7-12a8-4d00-8295-045594c3af76; Webstorm-23fed1c5=58b893e0-a985-42d0-87ef-1b86ae564ab3",
    "Referer": "http://localhost:8080/project/addFillIn?activeUrl=%2Fproject%2FprojectFillIn&uniqueId=16&keepAlive=true",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"projectName\":\"123\",\"projectType\":1,\"provinceName\":\"河北省\",\"provinceCode\":\"130000\",\"cityName\":\"唐山市\",\"cityCode\":\"130200\",\"areaName\":\"古冶区\",\"areaCode\":\"130204\",\"totalPlannedInvestment\":\"123\",\"projectStartTime\":\"2021-12-05T16:00:00.000Z\",\"projectEndTime\":\"2021-12-29T16:00:00.000Z\",\"projectContentSize\":\"123\",\"projectUnit\":\"111\",\"projectUnitProperty\":1,\"area\":{\"province\":{\"areaCode\":\"130000\",\"areaName\":\"河北省\",\"fatherId\":0,\"id\":37},\"city\":{\"areaCode\":\"130200\",\"areaName\":\"唐山市\",\"fatherId\":37,\"id\":61},\"area\":{\"areaCode\":\"130204\",\"areaName\":\"古冶区\",\"fatherId\":61,\"id\":64}},\"projectProperty\":2,\"currentYearCompleteInvestment\":\"123\",\"cumulativeInvestmentCompletion\":\"123\",\"constructionCycleStartTime\":\"2021-06\",\"constructionCycleEndTime\":\"2021-11\",\"deptId\":\"\",\"responsibleName\":\"asd\",\"responsiblePhoneNumber\":\"15052508051\",\"responsibleFixedNumber\":\"\",\"responsibleEmail\":\"\",\"concatName\":\"asd\",\"concatPhoneNumber\":\"15052508051\",\"concatFixedNumber\":\"\",\"concatEmail\":\"\",\"projectId\":null}",
  "method": "POST"
}).then(res => res.json())
.then(data => {
  console.log(data)
});
