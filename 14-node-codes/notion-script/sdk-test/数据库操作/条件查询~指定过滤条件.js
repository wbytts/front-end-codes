const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const notion = new Client({ auth: process.env.QQ_TOKEN });

(async () => {
  const databaseId = 'c347a14513bd41578112a5e460445ce0';
  const response = await notion.databases.query({
    database_id: databaseId,
    // filter: {
    //     "property": "Tags",
    //     "multi_select": { // 查询包含指定标签的
    //         "contains": "阮一峰"
    //     }
    // },
  });
  console.log(response.results.map(r => ({ id: r.id, name: r.properties.Tags.multi_select[0].name })));
})();

/*
查询结果排序：
    sort:
        property：属性名
        timestamp：时间戳
        direction："ascending" and "descending"

filter写法说明：属性值的条件
属性(property)有着不同的种类
* 文本类属性："title", "rich_text", "url", "email", "phone_number" 等
    * 可用的筛选操作：
        * equals
        * does_not_equal
        * contains
        * does_not_contain
        * starts_with
        * ends_with
        * is_empty
        * is_not_empty

* 数字类属性：如 number
    * 可用的筛选操作：
        * equals
        * does_not_equal
        * is_empty
        * is_not_empty
        * greater_than
        * less_than
        * greater_than_or_equal_to
        * less_than_or_equal_to

* 勾选框类型属性：checkbox
    * 可用的筛选操作：
        * equals
        * does_not_equal

* 选择框属性：select
    * 可用的筛选操作：
        * equals
        * does_not_equal
        * is_empty
        * is_not_empty

* 多选框属性：multi_select
    * 可用的筛选操作：
        * contains
        * does_not_contain
        * is_empty
        * is_not_empty

* 日期属性："date", "created_time", "last_edited_time"
    * 可用筛选操作：
        * equals
        * before
        * after
        * on_or_before
        * is_empty
        * is_not_empty
        * on_or_after
        * past_week
        * past_month
        * past_year
        * next_week
        * next_month
        * next_year

* 人员属性："people", "created_by", "last_edited_by"
    * 可用筛选操作：
        * contains(UUIDv4)
        * does_not_contain(UUIDv4)
        * is_empty
        * is_not_empty

* 文件类："files"
    * 可用筛选操作：
        * is_empty
        * is_not_empty

* 关系类："relation"
    * 可用筛选操作：
        * contains
        * does_not_contain
        * is_empty
        * is_not_empty

* 公式属性："formula"
    * 可用筛选操作：
        * text
        * checkbox
        * number
        * date

*/
