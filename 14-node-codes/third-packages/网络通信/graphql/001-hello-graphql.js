const { graphql, buildSchema } = require('graphql');

// 使用GraphQL Schema 语法构建一个 schema
const schema = buildSchema(`
  type Query {
    foo: String,
    count: Int
  }
`);

// 定义 schema 的 resolver
const root = {
  foo() {
    return 'bar';
  },
  count() {
    return 123;
  },
};

// 查询
graphql(schema, '{foo, count}', root).then(res => {
  console.log(res);
});
