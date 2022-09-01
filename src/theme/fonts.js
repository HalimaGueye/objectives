import * as Font from 'expo-font'

export const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  urbanist: {
    regular: 'urbanist_regular',
    medium: 'urbanist_medium',
    semiBold: 'urbanist_semiBold',
    semiBoldItalic: 'urbanist_semiBold_italic',
    bold: 'urbanist_bold',
    boldItalic: 'urbanist_bold_italic',
    light : 'urbanist_light'
  },
}

// fonts preloading
export const fontsAll = [
  {
    openSans_regular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    openSans_regular_italic: require('../../assets/fonts/OpenSans-Italic.ttf'),
  },
  {
    openSans_semiBold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  },
  {
    openSans_semiBold_italic: require('../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  },
  {
    openSans_bold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  },
  {
    openSans_bold_italic: require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
  },
  {
    urbanist_regular: require('../../assets/fonts/static/Urbanist-Regular.ttf'),
  },
  {
    urbanist_medium: require('../../assets/fonts/static/Urbanist-Medium.ttf')
  },

  {
    urbanist_semiBold : require('../../assets/fonts/static/Urbanist-SemiBold.ttf')
  },
  {
    urbanist_semiBold_italic : require('../../assets/fonts/static/Urbanist-SemiBoldItalic.ttf')
  },
  {
    urbanist_bold : require('../../assets/fonts/static/Urbanist-Bold.ttf')
  },
  {
    urbanist_light : require('../../assets/fonts/static/Urbanist-Light.ttf')
  },

]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
