/**
 * Created by Administrator on 2017/8/12.
 */
var mymodule = require("./add");
var content = process.argv[2];
var ext = process.argv[3];
mymodule(content, ext, function (err, data) {
    if (err)
        return console.error('这是错误:', err)

    data.forEach(function (file) {
        console.log(file)
    })
})