// import { map, isObject } from 'lodash'
let page = 55

let theme = {
  px: {
    spacing: {
      page: '55px'
    },
    width: {
      sidebar: '240px'
    }
  },
  spacing: {
    page,
    navItem: 15
  },
  height: {
    nav: 110,
    footer: page * 4
  },
  width: {
    page: 1220,
    sidebar: 240
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
