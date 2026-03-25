const u=require('url')
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var q=u.parse(addr,true)
var qdata=q.query;
console.log(qdata.year)

if(qdata['year']%4==0){
    console.log("It is a leap year")
}
else{
    console.log("It is not a leap year")
}