import CONF from './conf'
export default class {
  constructor() {
    this.wrapper = document.createElement('DIV')
    document.body.appendChild(this.wrapper)
    this.styleSheet = this.wrapper.appendChild(document.createElement('STYLE')).sheet
    this.container = this.wrapper.appendChild(document.createElement('DIV'))
    this.container.style.cssText = "position:fixed;top:0;left:0;height:0vh"
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
  createKeyfarmes(rules) {
    return this.createRules(rules, n => '@keyframes ' + n)
  }
  createStyles(rules, nameFn, keyframeNames) {
    return this.createRules(rules, nameFn, rule => rule.replace(/\{keyframes(\d+)\}/g, (_, p) => keyframeNames[p]))
  }
  load(type) {
    const {num, style, styles, keyframes} = CONF[type]
    const keyframeNames = this.createKeyfarmes(keyframes)
    this.createStyles([style], n => {
      this.container.className = n
      return '.' + n + ' div'
    }, keyframeNames)
    const classNames = this.createStyles(styles, n => ' .' + this.container.className + ' .' + n, keyframeNames)
    const fragement = document.createDocumentFragment()
    for (let i = 0; i < num; i++) {
      fragement.appendChild(document.createElement('DIV')).className = classNames[i % classNames.length]
    }
    this.container.appendChild(fragement)
  }
  run(type) {
    this.clear()
    this.load(type)
  }
  sakura() {
    this.run('sakura')
  }
  snow() {
    this.run('snow')
  }
  rain() {
    this.run('rain')
  }
  light() {
    this.run('light')
  }
  butterfly() {
    this.run('butterfly')
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