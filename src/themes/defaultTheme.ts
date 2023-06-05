export interface Theme{
    colors: {
        white: string,
      purple: string,
      red: string,
      inputColor: string,
      darkPurple: string,
      lightPurple:string,
      green: string,
      lightGreen: string,
    }
    inputBackground: string,
    inputBorder: string,
    inputBorderRadius: string,
    divBorder: string,
    boxShadowContainer: string,
}

export const defaultTheme: Theme = {
  colors: {
    white: '#FFFFFF',
    purple: '#5E54A4',
    red: '#FF7979',
    inputColor: '#3D3B48',
    darkPurple: ' #A6A1CF',
    lightPurple:'#BAB7D4',
    green: '#38CC8B',
    lightGreen: '#77E2B3',
  },
  inputBackground: '#ffffff',
  inputBorder: '1px solid #DEDEDE',
  inputBorderRadius: '0.5rem',
  divBorder: '1rem',
  boxShadowContainer: '0px 8px 0px rgba(0, 0, 0, 0.14688)',

}
