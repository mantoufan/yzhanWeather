# mtfPicListbox 图片列表盒子
不同尺寸图片焦点图式切换，拼图式展示的原生JS插件。
## 需求
- 同屏展示多张不同尺寸图片
- 自动及手动切换
- 点不同图片链接到不同地址
## 语言
原生Javascript
## 演示
https://mantoufan.github.io/mtfPicListbox/
## 使用
### 获取
- CDN
```
<script type='text/javascript' src="https://cdn.dm126.com/all/m/mtf/mtfPicListbox/1.0.0/mtfPicListbox.js"></script>
```
- 下载到本地
https://github.com/mantoufan/mtfPicListbox/releases
### 部署 
```
<!-- 放置图片列表的位置：开始 -->
<div id="js_box"></div>
<!-- 放置图片列表的位置：结束 -->
<!-- 引入Js：开始 -->
<script type='text/javascript' src="./mtfPicListbox.js"></script>
<!-- 引入Js：结束 -->
<!-- 初始化配置：开始 -->
<script>
    mtfPicListbox.init({
        el: 'js_box', // 放置图片列表的容器ID
        autoPlay: 3500, // 自动播放时间间隔，为0，不自动播放，点击任意图片，会停止自动播放
        datas : {
            pc : [ // 在电脑端显示
                {
                    href: '图片链接',
                    src: '图片地址'
                },
                {
                    href: '图片链接',
                    src: '图片地址'
                },
                {
                    href: '图片链接',
                    src: '图片地址'
                }
            ],
            mobile: [ // 在移动端显示
                {
                    href: '图片链接',
                    src: '图片地址'
                },
                {
                    href: '图片链接',
                    src: '图片地址'
                },
                {
                    href: '图片链接',
                    src: '图片地址'
                }
            ]
        }
    })
</script>
<!-- 初始化配置：结束 -->
```
## 预览
电脑端：  
![电脑端预览图](https://pic.downk.cc/item/5f5ddad5160a154a678e65db.jpg)  
移动端：  
![移动端预览图](https://pic.downk.cc/item/5f5ddad5160a154a678e65d6.jpg)