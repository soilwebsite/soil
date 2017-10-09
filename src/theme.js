// import { map, isObject } from 'lodash'

let theme = {
  px: {
    spacing: {
      page: '55px',
      sidebar: '240px'
    }
  },
  spacing: {
    page: 55,
    sidebar: 240,
    navItem: 15
  },
  height: {
    nav: 110
  },
  width: {
    page: 1220
  },
  color: {
    // primary: '#031864',
    primary: '#022041',
    secondary: '#f3ebe1',
    white: '#ffffff',
    text: '#333'
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
