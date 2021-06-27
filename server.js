
 /*
    响应完整的页面信息
 */
 
const http = require('http');
const url = require("url");
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');  //各种文件的后缀映射关系json
 
http.createServer((req,res) => {
  console.log('访问链接[' + req.url+ ']');
 // 访问链接[/md/main]
 // 访问链接[/markdown/get.html?url=main]
 var urlpath = url.parse(req.url).pathname;
 if (urlpath === '/')
    urlpath = '/index.html';

 /*
 if (req.url.startsWith('/md/')) {
        // 通过响应头来实现服务端重定向
        res.writeHead(302,{
            'Location': req.url.replace('/md/', '/markdown/get.html?url=')
        })
        res.end();
    }
  */

 var file = path.join(__dirname,urlpath);
  console.log('访问文件[' + file+ ']');
 fs.readFile(file,(err,fileContent) => {
   if(err){
     //没有找到对应的文件
     res.writeHead(404,{
       'Content-Type':'text/plain; chartset=utf8'
     });
     res.end('你访问的页面不存在！');
   }else{
    let dtype = 'text/html';
    //获取请求文件的后缀
    let ext = path.extname(req.url);
    //如果请求的文件后缀合理，就获取到标准的响应格式
    if(mime[ext]){
      dtype = mime[ext];
    }
    //如果响应的内容是文本，就设置utf8
    if(dtype.startsWith('text')){
      dtype += '; chartset=utf8';
    }
    res.writeHead(200,{
      'Content-Type':dtype, 
      'Cache-Control' : 'no-store', 
      
    });
    res.end(fileContent);
   }
 })
}).listen(8080,() => {
  console.log('--- running --- 127.0.0.1:8080/ ---')
})


//
// ip -4 -br -c addr | grep "rmnet0" | awk '{print $3}' | sed 's/\(\/.*\)//g'
// ip -6 -br -c addr | grep "rmnet0" | awk '{print $3}' | sed 's/\(\/.*\)//g'