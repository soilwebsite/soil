// import { map, isObject } from 'lodash'
let page = 55

let theme = {
  px: {
    spacing: {
      page: '55px',
      sidebar: '240px'
    }
  },
  spacing: {
    page: page,
    sidebar: 240,
    navItem: 15,
    footer: page * 4
  },
  height: {
    nav: 110,
    footer: 382
  },
  width: {
    page: 1220
  },
  color: {
    // primary: '#031864',
    primary: '#022041',
    secondary: '#f3ebe1',
    white: '#ffffff',
    text: '#000'
  },
  size: {
    font: {
      primary: 12,
      secondary: 10
    }
  }
}

// let px = {}
// let pxer = obj => {
//   return map(obj, (v, k) => {
//     if(isObject(v)) px[k] = pxer(v); else px[k] = v + 'px'
//     return px[k]
//   })
// }

// pxer(theme)
// theme.px = px
// console.log(theme);

export default theme
