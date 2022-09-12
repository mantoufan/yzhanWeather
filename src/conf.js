const tpl = {
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
      `animation-delay: .25s;
       animation-duration: 5.5s;
       animation-name: {keyframes2};`,
      `animation-delay: .3s;`,
      `animation-delay: .7s;
       animation-duration: 3.5s`,
      `animation-delay: .5s;
       animation-duration: 4s`
    ],
    keyframes: [
      `from {
        opacity: 1;
      }
      to {
        transform: translate(10vw, 96vh) rotateX(45deg);
        opacity: .2;
      }`,
      `from {
        opacity: 1;
      }
      to {
        transform: translate(-10vw, 96vh) rotateY(45deg);
        opacity: .2;
      }`,
      `from {
        opacity: 1;
      }
      to {
        transform: translate(5vw, 96vh) rotateX(-45deg);
        opacity: .2;
      }`
    ]
  }
}
export default {
  sakura: {
    num: 20,
    style: `
      display: inline-block;
      width: 1.5vw;
      height: 1.5vh;
      margin: 0 1.75vw;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translate(0, -200%);
      animation: {keyframes0} 5s linear infinite;
    `,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  },
  snow: {
    num: 20,
    style: `
      display: inline-block;
      width: 1vw;
      height: 1vw;
      margin: 0 2vw;
      border-radius: 50%;
      background-color: white;
      border: 1px solid #ccc;
      box-sizing: border-box;
      transform: translate(0, -100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  },
  rain: {
    num: 20,
    style: `
      display: inline-block;
      width: .5vw;
      height: 1vw;
      margin: 0 2vw;
      border-radius: 50% 50% 0 0;
      background-color: black;
      border: 1px solid #ccc;
      box-sizing: border-box;
      transform: translate(0, -100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,
    styles: tpl.fall.styles,
    keyframes: tpl.fall.keyframes
  }
}