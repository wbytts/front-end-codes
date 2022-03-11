var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://127.0.0.1:7474');

db.cypher({
  query: 'MATCH (n) RETURN n LIMIT 10000;',
}, function (err, results) {
  if (err) throw err;
  console.log(results)
});
