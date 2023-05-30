const page = document.querySelector('.page')
const rgbColor = document.querySelector('.color-rgb')
const hexColor = document.querySelector('.color-hex')
const inputColor = document.querySelector('.input-color')
const input = document.querySelector('.text')
const btnInput = document.querySelector('.btn')
const [copy1, copy2] = document.querySelectorAll('.copy')

const generateHEX = () => {
  const hex = '0123456789abcdef'

  let color = ''
  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length))
  }

  page.style.backgroundColor = `#${color}`
  // rgbColor.innerHTML = `#${color}`
  hexColor.innerHTML = `#${color}`
}

const generateRGB = () => {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)

  let rgb = `${red}, ${green}, ${blue}`

  return { red, green, blue, rgb }
}

const HEXToRGB = (color) => {
  let hexToRgb = color.match(/.{1,2}/g)

  aRed = parseInt(hexToRgb[0], 16)
  aGreen = parseInt(hexToRgb[1], 16)
  aBlue = parseInt(hexToRgb[2], 16)

  let aRgb = [
    aRed,
    aGreen,
    aBlue,
  ]

  return { aRed, aGreen, aBlue, aRgb }
}

const RGBToHEX = (r, g, b) => {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  let hex = r + g + b

  return { hex }
}


const loadColor = (color) => {
  const { red, green, blue, rgb } = generateRGB()
  const { hex } = RGBToHEX(red, green, blue)

  if (red > 200 || green > 200 || blue > 200) {
    rgbColor.style.color = '#000'
    
    copy1.style.filter = 'invert(0)'
    copy2.style.filter = 'invert(0)'

    btnInput.style.border = '2px #000 solid'
    btnInput.style.color = '#000'
  } else {
    rgbColor.style.color = '#fff'
    
    copy1.style.filter = 'invert(1)'
    copy2.style.filter = 'invert(1)'

    btnInput.style.border = '2px #fff solid'
    btnInput.style.color = '#fff'
  }

  if (rgbColor.style.color === 'rgb(0, 0, 0)') {
    hexColor.style.color = '#000'
    
    copy1.style.filter = 'invert(0)'
    copy2.style.filter = 'invert(0)'

    btnInput.style.border = '2px #000 solid'
    btnInput.style.color = '#000'
  } else {
    hexColor.style.color = '#fff'
    
    copy1.style.filter = 'invert(1)'
    copy2.style.filter = 'invert(1)'

    btnInput.style.border = '2px #fff solid'
    btnInput.style.color = '#fff'
  }

  if (color) {
    page.style.backgroundColor = `${color}`
    if (color[0] === '#') {
      hexColor.innerHTML = `${color}`
      return
    }
    if (color[0] === 'r') {
      rgbColor.innerHTML = `${color}`
      return
    }
    return
  }
  page.style.backgroundColor = `rgb(${rgb})`
  rgbColor.innerHTML = `rgb(${rgb})`
  hexColor.innerHTML = `#${hex}`
}
loadColor()


page.addEventListener('click', () => {
  loadColor()
})

inputColor.addEventListener('click', (e) => {
  e.stopPropagation()
})

btnInput.addEventListener('click', () => {
  if (input.value) loadColor(input.value)
})

