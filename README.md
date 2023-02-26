# yzhanWeather
![npm](https://img.shields.io/npm/v/yzhanweather)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/yzhanweather)
![npm](https://img.shields.io/npm/dt/yzhanweather)
[![GitHub license](https://img.shields.io/github/license/mantoufan/yzhanweather)](https://github.com/mantoufan/yzhanweather/blob/main/LICENSE)
![ie11](https://img.shields.io/badge/IE-11-skyblue)  
Pure CSS animation for sakura, rain, snow, firefly and butterfly effects, high performance without affecting SEO   
纯 CSS 动画实现樱花、雨、雪、萤火虫和蝴蝶飞舞背景效果，高性能且不影响 SEO  
## 1kB Series Lib
Fully functional with gzip code 1kB+ and keep source code readable
## Quick Start
### Setup
#### Node.js
```javascript
npm i yzhanweather
```
#### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/yzhanweather@latest/docs/yzhanweather.min.js"></script>
```
### Use
```javascript 
const yzhanweahter = new YZhanWeather()
yzhanweahter.run('firefly') // Options: sakura | snow | firefly | rain | butterfly 
```
## Demo
[Online Demo](https://mantoufan.github.io/yzhanWeather/)  
*Note: click the select on the left-top to change weather*

### GIF
sakura  
![](https://s2.loli.net/2023/02/26/FXZwUh5pA3P6xHT.gif)
snow  
![](https://s2.loli.net/2023/02/26/TKJy1qS9LHgntFC.gif)
firefly   
![](https://s2.loli.net/2023/02/26/DnhjpbHgPizZrw2.gif)
rain  
![](https://s2.loli.net/2023/02/26/X2RjoHuw18SslxD.gif)
butterfly   
![](https://s2.loli.net/2023/02/26/QlyUdq3jeRThkNZ.gif)
 

## Performance comparsion
We use a page from madfan including a 720P video background, introduce different version of this script and compare resources usage growth.  
*Note: Data obtained when rendering 40 butterflies at the same time.*
### Memory
- Original Page
- With JavaScript Version
- With Pure CSS Version
### CPU
- Original Page
- With JavaScript Version
- With Pure CSS Version
### FPS
- Original Page
- With JavaScript Version
- With Pure CSS Version