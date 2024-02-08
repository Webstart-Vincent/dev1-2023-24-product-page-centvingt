/** @type {NodeListOf<HTMLImageElement>} */
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')

const productDiv = document.querySelector('.product')

// Raccourci jsdoctype
/** @type {HTMLImageElement} */
const productMainImg = document.querySelector('.product__main')

productThumbs.forEach((productThumb, index) => {
  // Ajouter un event handler sur le click du producThumb
  productThumb.addEventListener('click', () => {
    // Récupérer le src du productThumb
    const src = productThumb.src

    // Donner src en valeur au src de productMainImg
    productMainImg.src = src

    // Donner au className de la productDiv
    productDiv.className = `product active-${index + 1}`
  })
})
