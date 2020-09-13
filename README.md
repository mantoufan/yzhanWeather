# mtfImgListbox 图片列表盒子
解决不同尺寸图片焦点图式切换，拼图式展示的原生JS插件。
## 需求
- 同屏展示多张不同尺寸图片
- 自动及手动切换
- 点不同图片链接到不同地址
## 语言
原生Javascript
## 演示
https://mantoufan.github.io/mtfImgListbox/
## 使用
### 获取
- CDN
```
<script type='text/javascript' src="https://cdn.dm126.com/all/m/mtfImgListbox.js"></script>
```
- 下载到本地
https://github.com/mantoufan/mtfPicListbox/releases
### 部署 
```
<!-- 放置图片列表的位置：开始 -->
<div id="js_box"></div>
<!-- 放置图片列表的位置：结束 -->
<!-- 引入Js：开始 -->
<script type='text/javascript' src="/mtfImgListbox.js"></script>
<!-- 引入Js：结束 -->
<!-- 初始化配置：开始 -->
<script>
    mtfJsImgList.init({
        el: 'js_box', // 放置图片列表的容器ID
        autoPlay: 3500, // 自动播放时间间隔，为0，不自动播放，点击任意图片，会停止自动播放
        datas : {
            pc : [ // 在电脑端显示
                {
                    href: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc13.jpg',
                    src: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc13.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc15.jpg',
                    src: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc15.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc19.jpg',
                    src: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc19.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc20.jpg',
                    src: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc20.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc27.jpg',
                    src: 'https://pic.downk.cc/item/5f5dec49160a154a6792dc27.jpg'
                }
            ],
            mobile: [ // 在移动端显示
                {
                    href: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7f3.jpg',
                    src: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7f3.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7f8.jpg',
                    src: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7f8.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7fb.jpg',
                    src: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7fb.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7ff.jpg',
                    src: 'https://pic.downk.cc/item/5f5deca7160a154a6792f7ff.jpg'
                },
                {
                    href: 'https://pic.downk.cc/item/5f5deca7160a154a6792f809.jpg',
                    src: 'https://pic.downk.cc/item/5f5deca7160a154a6792f809.jpg'
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