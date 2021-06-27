const showdown = require("./showdown.min.js")
//var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
//         'because:\n\n' +
//         ' - it\'s easy to use\n' +
//         ' - it\'s extensible\n' +
//         ' - works in the server and in the browser';
//var html = converter.makeHtml(md);
//console.log(html);


const path = require('path')
const fs = require('fs')
// 服务器端的jquery，用于选择字符 eg: $('.title').text()，这里没用到，写爬虫可以用到
// const chreeio = require('cheerio') 

// G:\webproject\component
const basePath = '/sdcard/git/cnzixn.github.io/md/'

function mapDir(dir, callback, finish) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      console.error(err)
      return
    }
    files.forEach((filename, index) => {
      let pathname = path.join(dir, filename)
      fs.stat(pathname, (err, stats) => { // 读取文件信息
        if (err) {
          console.log('获取文件stats失败')
          return
        }
        if (stats.isDirectory()) {
          mapDir(pathname, callback, finish)
        } else if (stats.isFile()) {
          if (['.json', '.less'].includes(path.extname(pathname))) {  // 排除 目录下的 json less 文件
            return
          }
          fs.readFile(pathname, (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            callback && callback(pathname, data)
          })
        }
      })
      if (index === files.length - 1) {
        finish && finish()
      }
    })
  })
}

mapDir(
  basePath,
  function(filepath, filedata) {
    //console.log('TCL: path', topath.toString());
    //console.log('TCL: file', filedata.toString());
    // 读取文件后的处理
    
    let topath = filepath.replace(/md/g, 'html');
    
    let html = (new showdown.Converter()).makeHtml(filedata.toString());
    html = '<html><head><meta charset="utf-8"><meta http-equiv="Cache-Control" content="no-store" /><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/><title>兔人协会</title><link rel="icon" href="../images/icon.png" type="image/x-icon"/><link rel="stylesheet" href="../css/typo200928.css" type="text/css"></head><body><div id="content" class="typo">'
    + html
    + '</div></body></html>';
    //fs.writeFile(topath.toString(), html.toString()); 
    fs.writeFile(topath.toString(), html.toString(), (err) => {
    if(err) throw err;
    console.log(topath.toString()+':转换成功');
})
    //console.log('TCL: file', html.toString());
  },
  function() {
     //console.log('运行结束')
  }
)