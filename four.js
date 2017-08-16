/**
 * Created by Administrator on 2017/8/16.
 */
var fs = require("fs");
var filename = process.argv[2];
fs.readFile(filename, function(err, data){
    if(err) {
        throw err;
    }
    // 你也可以使用 fs.readFile(file, 'utf8', callback)
    var lines = data.toString().split('\n').length;
    console.log(lines)
});
