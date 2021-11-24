module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        black : {
          highlighted: '#191919',
          DEFAULT: '#000000',
          // dark: '#000000',
        },
        granite: '#808080',
        ghost: '#CBCBCB',
        silver: '#C9C9C9',
        yellow: {
          DEFAULT: '#FFC02E',
          dark: "#FFBE00",
        }
      },
      fontSize: {
        'xxs': '10px',
        '21p': ['21px', {
          letterSpacing: '5px',
          lineHeight: '25px',
        }],
        '27p': ['27px', {
          letterSpacing: '5px',
          lineHeight: '31px',
        }],
        '50p': ['50px', {
          letterSpacing: '5px',
          lineHeight: '60px',
        }],
        '90p': ['90px', {
          letterSpacing: '5px',
          lineHeight: '100px',
        }],
      },
      spacing: {
        '50p': '50px',
        '70p': '70px',
        '150p': '150px',
        '300p': '300px',
        '370p': '370px',
        '420p': '420px',
        '610p': '610px',
      },
      fontFamily: {
        'oswald' : ['Oswald', 'sans-serif'],
        'source-sans-pro' : ['Source Sans Pro', 'sans-serif'],
      },
      letterSpacing: {
        '5p': '5px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
