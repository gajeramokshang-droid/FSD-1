var url=require('url')
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var q=url.parse(addr,true)   //CONVERT IT TAKES URL AS A PARAMETER AND PARSE IT AND CONVERT IT  INTO OBJECT
console.log(q)