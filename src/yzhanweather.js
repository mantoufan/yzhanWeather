import CONF from './conf'
export default class {
  constructor() {
    this.wrapper = document.createElement('DIV')
    document.body.appendChild(this.wrapper)
    this.styleSheet = this.wrapper.appendChild(document.createElement('STYLE')).sheet
    this.container = this.wrapper.appendChild(document.createElement('DIV'))
  }
  uuid() {
    return 'xxxxxxxxxx'.replace(/x/g, _ => (Math.random() * 16 | 0).toString(16))
  }
  createRules(rules, nameFn, ruleFn = v => v) {
    const names = []
    for (const rule of rules) {
      const name = 'yz' + this.uuid()
      names.push(name)
      this.styleSheet.insertRule(`${nameFn(name)} { ${ruleFn(rule)} }`, 0)
    }
    return names
  }
  createRule(rule, nameFn) {
    for (const name in rule) {
      this.styleSheet.insertRule(`${nameFn(name)} { ${rule[name]} }`, 0)
    }
  }
  createKeyfarme(rule) {
    this.createRule(rule, n => '@keyframes ' + n)
  }
  createKeyfarmes(rules) {
    return this.createRules(rules, n => '@keyframes ' + n)
  }
  createStyles(rules, nameFn, keyframeNames) {
    return this.createRules(rules, nameFn, rule => rule.replace(/\{keyframes(\d+)\}/g, (_, p) => keyframeNames[p]))
  }
  processStyles(styles, fn) {
    const n = styles.length
    for (let i = 0; i < n; i++) {
      const g = styles[i].match(/animation-duration:(?<duration>.*)/)
      if (g === null) continue
      fn(parseFloat(g.groups.duration), g.groups.duration, i)
    }
  }
  replaceStyles(styles, config) {
    let maxDuration = 0
    this.processStyles(styles, duration => maxDuration < duration && (maxDuration = duration))
    this.processStyles(styles, (duration, srcDuration, i) => {
      const newDuration = (duration / maxDuration) * config.maxDuration
      const dstDuration = srcDuration.replace(duration, newDuration)
      styles[i] = styles[i].replace(srcDuration, dstDuration)
    })
  }
  load(type, config) {
    let {num, html, containerStyle, style, styles, keyframe = {}, keyframes} = CONF[type]
    this.createKeyfarme(keyframe)
    const keyframeNames = this.createKeyfarmes(keyframes)
    if (typeof style === 'string') style = { '': style }  
    this.createStyles([style['']], n => '.' + (this.container.className = n) + ' div', keyframeNames)
    this.createStyles([containerStyle], _ => '.' + this.container.className, keyframeNames)
    this.createRule(style, n => '.' + this.container.className + ' div' + (n[0] === ':' ? '' : ' ') + n)
    this.replaceStyles(styles, config)
    const classNames = this.createStyles(styles, n => ' .' + this.container.className + ' .' + n, keyframeNames)
    const fragement = document.createDocumentFragment()
    for (let i = 0; i < num; i++) {
      const div = document.createElement('DIV')
      if (html) div.innerHTML = html
      fragement.appendChild(div).className = classNames[i % classNames.length]
    }
    this.container.appendChild(fragement)
  }
  run(type, config = { maxDuration: 10 }) {
    this.clear()
    this.load(type, config)
  }
  clear() {
    this.container.innerHTML = ''
    while (this.styleSheet.cssRules.length) this.styleSheet.deleteRule(0)
  }
  destory() {
    this.wrapper.remove()
    this.wrapper = this.styleSheet = this.container = null
  }
}