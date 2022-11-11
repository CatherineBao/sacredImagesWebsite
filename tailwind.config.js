/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'accent': '#F2A406',
      'bars': '#0c305c',
      'background': '#010b1f',
      'text': '#78CDAE',
      'mainText': '#bfc4c9',
    },
    extend: {
      backgroundImage: {
        'mural': "url('https://i.imgur.com/Xd8nVgF.jpg')",
      },
      fontFamily: {
        'main': ['Roboto', 'sans-serif'],
        'arvo': ['Arvo', 'serif'],
      },
    },
		minWidth: {
      '1/3': '33%',
			'1/4': '25%',
			'2/5': '40%'
    },
  },
  plugins: [],
}
