
# 五分钟玩转饥荒模组  

-----  

## 安装游戏  

　饥荒手机版，国内无法购买正版。如果你会访问外网，那么请在 [![谷歌商店playlogo.png][playlogo.png]](https://play.google.com/store/apps/details?id=com.kleientertainment.doNotStarveShipwrecked) 购买正版游戏。否则，你只能在国内某些应用市场下载，我们推荐下载 [![好游快爆hykblogo.png][hykblogo.png]](https://www.3839.com/a/85896.htm) 的试玩版。  

　你也可以直接下载apk与obb文件，这是好游快爆安装饥荒后的日志：  

``` txt
/sdcard/HYKB/bazaar/饥荒海难完整版.meta  

---网络请求---Url: http://sj.71acg.com/hykb/202101/main.51.com.kleientertainment.doNotStarveShipwrecked.obb  

---网络请求---Url: http://sj.71acg.com/hykb/202101/20210105dontstarveship.apk  

```
-----  

## 安装框架

>你已经拥有安装包(apk)与数据包(obb)文件...

1、兔人模组(0001)，此文件只有数据包补丁(ADD\_TO\_OBB)这一部分的文件。  

##### ![兔人框架][bm01.png]

2、兔人框架(110128)，此文件有安装包补丁(ADD\_TO\_APK)和数据包补丁(ADD\_TO\_OBB)这两部分的文件。  

##### ![兔人框架][bm02.png]

3、游戏安装包(apk)与数据包(obb)文件皆为 [ZIP格式](https://baike.baidu.com/item/zip/16684862) 的压缩文件。  

##### ![兔人框架][bm03.png] ![兔人框架][bm04.png]

``` txt
*压缩文件
MT管理器(2.9.8)：长按文件，打开方式，(长按)浏览压缩包，设为默认打开方式。
```

4、将兔人框架中安装包补丁(ADD\_TO\_APK)里的文件***全选***并添加到安装包(apk)，数据包补丁(ADD\_TO\_OBB)里的文件***全选***并添加到数据包(obb)。  

##### ![兔人框架][bm05.png] ![兔人框架][bm06.png]

5、安装包(apk)需要***签名***后才能安装；数据包(obb)需要重命名将 \*\*\*.***com***.klei\*\*\* 改为 \*\*\*.***hei***.klei\*\*\* ，然后移动到 /sdcard/Android/obb/***hei***.klei\*\*\*/ 文件夹。  

##### ![兔人框架][bm07.png] ![兔人框架][bm08.png]

``` txt
*签名
MT管理器(2.9.8)：长按安装包(apk)文件，签名，默认 V1+V2，确定。
```

-----

## 安装补丁

　安装包补丁只会使用一次，所以我们一般说的补丁是数据包补丁，模组则是扩展游戏玩法的数据包补丁。直接找到数据包补丁(ADD\_TO\_OBB)，闭着眼睛将里面的文件***全选***并添加到数据包(obb)。  

##### ![兔人框架][bm09.png]

-----

<!--注释开始

https://imgtu.com/?x_x=d*****8

echo '' > md/bmjc-2.md ; cat images/playlogo.txt images/hykblogo.txt images/bm01.txt images/bm02.txt images/bm03.txt images/bm04.txt images/bm05.txt images/bm06.txt images/bm07.txt images/bm08.txt images/bm09.txt >> md/bmjc-2.md ; cat md/bmjc-1.md md/bmjc-2.md > md/bmjc.md

注释结束-->
