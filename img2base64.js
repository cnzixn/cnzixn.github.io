
const path = require('path')
const fs = require('fs')
// 服务器端的jquery，用于选择字符 eg: $('.title').text()，这里没用到，写爬虫可以用到
// const chreeio = require('cheerio') 

// G:\webproject\component
const basePath = '/sdcard/git/cnzixn.github.io/images/'

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
          if (['.json', '.txt'].includes(path.extname(pathname))) {  // 排除 目录下的 json less 文件
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

function getImageType(str){
    var reg = /\.(png|jpg|gif|jpeg|webp)$/;
    return str.match(reg)[1];
}

mapDir(
  basePath,
  function(pathname, filedata) {
    let topath = pathname; //pathname.replace(/images/g, 'base64');
    let fileName = pathname.split('/').slice(-1)[0]; // 提取文件名
    topath = topath.replace(path.extname(pathname), '.txt');
    //console.log('TCL: path', topath.toString());
    //console.log('TCL: file', filedata.toString());
    // 读取文件后的处理
    
    
    let base64str = Buffer.from(filedata, 'binary').toString('base64'); 
    //console.log(base64str);
    let base64_img = '['+fileName+']: data:image/'+ getImageType(pathname) +';base64,' + base64str+'\n\n';
    
    fs.writeFile(topath, base64_img, (err) => {
    if(err) throw err;
    console.log(topath.toString()+':转换成功');
})
  },
  function() {
     console.log('运行结束')
  }
)


