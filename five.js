/**
 * Created by Administrator on 2017/8/11.
 */
var fs =require('fs');
var path =require('path');
 fs.readdir("fou",function (err, list) {
    if(err){
        throw err;
    }
    for(var i=0;i<list.length;i++){
        var file =list[i];
        if(path.extname(file) == '.txt'){
            console.log(file);
        }
    }
});