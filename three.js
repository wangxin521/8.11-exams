/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require("fs");
var filename = process.argv[2];
var str = fs.readFileSync(filename).toString();
var num = str.split("\n").length;
console.log(num);
