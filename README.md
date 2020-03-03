# mtf-js-imglist 图片列表组件
## 语言
- 原生Javascript
## 使用方法
```
<!-- 放置图片列表的位置：开始 -->
<div id="js_box"></div>
<!-- 放置图片列表的位置：结束 -->
<!-- 引入Js：开始 -->
<script type='text/javascript' src="/mtf/mtf-js-imglist/mtf-js-imglist.js?v=0.0.1"></script>
<!-- 引入Js：结束 -->
<!-- 初始化配置：开始 -->
<script>
    mtfJsImgList.init({
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
## 预览图
电脑端：  
![mtf-js-imglist 图片列表组件电脑端预览图](https://mhjlw.github.io/mtf-js-imglist/preview_pc.jpg)
移动端：  
![mtf-js-imglist 图片列表组件移动端预览图](https://mhjlw.github.io/mtf-js-imglist/preview_mobile.jpg)