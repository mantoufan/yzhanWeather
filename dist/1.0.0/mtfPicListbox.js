var mtfPicListbox = (function() {
    /** 判断是否移动端 */
    function _isMobile() {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false
    }
    /** DOM节点：选择 */
    function $(id) {
        return document.getElementById(id)
    }
    /** DOM节点：创建 */
    function $$(tagName) {
        return document.createElement(tagName)
    }
    /** 动画 */
    function fade(el, action, cb) {
        clearInterval(el.timer)
        el.timer = setInterval(function () {
            var isEnd = false
            if (action === 'in') {
                el.style.opacity = +el.style.opacity + 0.1
            } else {
                el.style.opacity -= 0.1
            }
            if (el.style.opacity > 1) {
                el.style.opacity = 1
                isEnd = true
            } else if (el.style.opacity < 0) {
                el.style.opacity = 0
                isEnd = true
            }
            if (isEnd) {
                clearInterval(el.timer)
                el.timer = null
                cb && cb()
            }
        }, 60)
    }
    var init = function (opt) {
        var datas = [], data = {}, index = 0, timer = null, isMobile = _isMobile()
        if (opt.datas) {
            if (isMobile) {
                datas = opt.datas['mobile'] || opt.datas['pc']
            } else {
                datas = opt.datas['pc']
            }
        }
        if (datas.length > 0) {
            var container = $$('div'), list = $$('div'), show = $$('div')
            for (var i=0, data, img, a; i<datas.length; i++) {
                data = datas[i]
                img = $$('img')
                img.src = data.src
                img.setAttribute('href', data.href)

                list.appendChild(img)

                if (isMobile) {
                    img.style.cssText = 'height: 100%'
                } else {
                    img.style.cssText = 'width: 100%'
                }
                
                img.onclick = function () {
                    var a = $$('a'), top = this.offsetTop, left = this.offsetLeft, img = this.cloneNode(), cw = document.body.clientWidth / 2, ch = document.body.clientHeight / 2
                    if (isMobile) {
                        if (left > cw) {
                            list.scrollLeft = left - cw
                        } else {
                            list.scrollLeft = 0
                        }
                    } else {
                        if (top > ch) {
                            list.scrollTop = top - ch
                        } else {
                            list.scrollTop = 0
                        }
                    }
                    
                    a.href = img.getAttribute('href')
                    a.appendChild(img)
                    if (isMobile) {
                        img.style.cssText = 'width: 100%; height: auto'
                    } else {
                        img.style.cssText = 'width: auto; height: 100vh'
                    }
                    fade(show, 'out', function () {
                        show.innerHTML = ''
                        show.appendChild(a)
                        fade(show, 'in')
                    })
                }
            }

            list.onmousedown = function () {
                clearInterval(timer)
                timer = null
            }
            container.appendChild(list)
            container.appendChild(show)
            
            $(opt.el).appendChild(container)

            list.style.cssText = 'height: 20vh; overflow: auto'
            show.style.cssText = 'display: flex; height: 80vh; overflow: auto; align-items: center; justify-content: center; opacity: 1; background-color: #efefef'

            if (isMobile) {
                list.style.height = '20vh'
                list.style.display = 'flex'
                show.style.height = '80vh'
            } else {
                container.style.cssText = 'display: flex'
                list.style.width = '20vw'
                show.style.width = '80vw'
                list.style.height = show.style.height = '100vh'
            }
            

            if (opt.autoPlay) {
                timer = setInterval(function() {
                    var nodes = list.childNodes, len = nodes.length
                    if (index >= len-1) {
                        index = -1
                    }
                    nodes[++index].click()
                }, opt.autoPlay)
            }

            list.firstChild.click()
        }
    }
    return {
        init
    }
})()