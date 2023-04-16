const tpl = {
  container: {
    style: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
    `
  },
  fall: {
    styles: [
      `animation-delay: .1s;
       animation-duration: 4s`,
      `animation-delay: .5s;
       animation-duration: 5s`,
      `animation-delay: .3s;
       animation-duration: 3s;
       animation-name: {keyframes2}`,
      `animation-delay: .2s;
       animation-duration: 3.5s;
       animation-name: {keyframes1}`,
      `animation-delay: .9s;
       animation-duration: 3s;
       animation-name: {keyframes1};
       animation-duration: 4.5s`,
      `animation-delay: .7s;
       animation-duration: 5.5s;
       animation-name: {keyframes1}`,
      `animation-delay: .4s;
       animation-duration: 3s`,
      `animation-delay: .6s;
       animation-duration: 4s;
       animation-name: {keyframes1}`,
      `animation-delay: .5s;
       animation-duration: 5.5s;
       animation-name: {keyframes2};`,
      `animation-delay: .3s;`,
      `animation-delay: .7s;
       animation-duration: 3.5s`,
      `animation-delay: .5s;
       animation-duration: 4s`,
       `animation-delay: .15s;
       animation-duration: 6.5s;
       animation-name: {keyframes2};`,
       `animation-delay: .5s;
       animation-duration: 6.5s;
       animation-name: {keyframes3};`,
       `animation-delay: .55s;
       animation-duration: 5.5s;
       animation-name: {keyframes3};`,
       `animation-delay: .75s;
       animation-duration: 7.5s;
       animation-name: {keyframes3};`,
    ],
    keyframes: [
      `from {
        opacity: .9;
      }
      to {
        transform: translate(10vw, 100vh) rotateX(45deg);
        opacity: .2;
      }`,
      `from {
        opacity: .9;
      }
      to {
        transform: translate(-10vw, 100vh) rotateY(45deg);
        opacity: .2;
      }`,
      `from {
        opacity: .9;
      }
      to {
        transform: translate(5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`,
      `from {
        opacity: .9;
      }
      to {
        transform: translate(-5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`
    ]
  },
  spread: {
    keyframes: [
      `from {
        transform: translateY(50vh) rotateZ(55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, -100%) rotateZ(45deg);
        opacity: .9;
      }`,
      `from {
        transform: translateY(50vh) rotateZ(-55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, -100%) rotateZ(-45deg);
        opacity: .9;
      }`,
      `from {
        transform: translateY(50vh) rotateZ(155deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, 105vh) rotateZ(145deg);
        opacity: .9;
      }`,
      `from {
        transform: translateY(50vh) rotateZ(195deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, 105vh) rotateZ(185deg);
        opacity: .9;
      }`,
    ]
  },
  snow: {
    style: `
      width: .5vw;
      height: .5vw;
      border-radius: 50%;
      background-color: white;
      border: 1px solid #fefefe;
      transform: translateY(-100%);
      animation: {keyframes0} 6s linear infinite;
    `,
  }
}
export default {
  sakura: {
    num: 20,
    containerStyle: tpl.container.style,
    style: `
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 5s linear infinite;
    `,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  },
  snow: {
    num: 60,
    containerStyle: tpl.container.style,
    style: tpl.snow.style,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  },
  rain: {
    num: 60,
    containerStyle: tpl.container.style,
    style: `
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  },
  firefly: {
    num: 60,
    containerStyle: tpl.container.style,
    style: tpl.snow.style.replace('white', '#fff06b'),
    styles: tpl.fall.styles,
    keyframes: tpl.spread.keyframes
  },
  butterfly: {
    num: 40,
    containerStyle: tpl.container.style,
    html: `
      <div class="wing"></div>
      <div class="wing"></div>
    `,
    style: {
      '' : `
        display: inline-block;
        position: relative;
        width: 1.25vw;
        height: 1.25vw;
        transform: translateY(-100%);
        animation: {keyframes0} 6s linear infinite;
      `,
      '::after': `
        position: absolute;
        content: ' ';
        background-color: lightgoldenrodyellow;
        border-radius: 50%;
        display: block;
        left: .5vw;
        width: .25vw;
        height: .75vw;
      `,
      '.wing': `
        position: absolute;
        width: .75vw;
        height: .75vw;
        animation: wing .3s infinite ease-in-out alternate;
      `,
      '.wing:last-child': `
        right: 0;
      `,
      '.wing:last-child::after': `
        right: .125vw;
        left: auto;
      `,
      '.wing::before': `
        position: absolute;
        content: ' ';
        display: block;
        width: .6vw;
        height: .6vw;
        background-color: lightyellow;
        border-radius: 50%;
      `,
      '.wing::after': `
        position: absolute;
        content: ' ';
        display: block;
        top: .5vw;
        left: .12vw;
        width: .5vw;
        height: .5vw;
        background-color: lightyellow;
        border-radius: 50%;
      `
    },
    keyframe: {
      'wing': `
        from {
          transform: scale(.9);
        }
        to {
          transform: scale(1.1);
        }`
    },
    styles: tpl.fall.styles,
    keyframes: tpl.spread.keyframes
  }
}