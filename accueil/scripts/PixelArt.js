/**
 * Create a frame to draw invaders
 * @param {Object} formDisplay - Element that contains the form
 * @param {Object} gridDisplay - Element that contains the 'caneva'
 * @param {Object} colorDisplay - Element that contains the 'colorBox'
 */
class PixelArt {
  constructor(formDisplay, gridDisplay, colorDisplay) {
    // On récup la div du formulaire
    this.formDisplay = formDisplay
    // On récup un affichage de la grille
    this.gridDisplay = gridDisplay
    // La section...
    this.colorDisplay = colorDisplay
    // Les styles fournis...
    this.styles = ['highlight', 'light', 'plain', 'empty']

    this.styleSelected = 'empty'
    this.gridSize = null
    this.gridWidth = 0
    console.log('Nouveau PixelArt')
  }

  /*-----------------------------------------------*/
  /*--------------- FONCTIONS ---------------------*/
  /*-----------------------------------------------*/

  /**
   * Fonction qui crée à la fois les 'pixels' et la boite
   * qui les contient.
   */
  createInvaderGrid() {
    console.log(`le display depuis createInvaderGrid ${this.gridDisplay}`)

    // On vide la div display
    this.gridDisplay.textContent = null

    // On calcul le nombre total de cases
    var totalCases = this.gridSize.value * this.gridSize.value

    // On donne les bonnes dimensions au display
    this.gridDisplay.style.width = this.gridWidth + 'px'
    this.gridDisplay.style.height = this.gridWidth + 'px'

    // On fait une boucle selon le nbPixel
    var index = 0
    while (index < totalCases) {
      // Créer une div
      var pixel = document.createElement('div')

      // Ajout d'une class à la div
      pixel.classList.add('pixel')

      // Ajout d'une couleur de fond
      pixel.classList.add(this.styleSelected)

      // On fixe hauteur et largeur en fonction de l'input
      pixel.style.width = this.gridWidth / this.gridSize.value + 'px'
      pixel.style.height = this.gridWidth / this.gridSize.value + 'px'

      // On ajoute un eventListener
      pixel.addEventListener('click', (event) => {
        this.changeColor(event.target, this.styleSelected)
      })

      // On met le pixel dans la grille
      this.gridDisplay.appendChild(pixel)
      index++
    }
    // On remet les inputs à 0
    this.gridSize.value = null
  }

  /**
   * Fonction qui change la couleur d'un 'pixel'
   * @param {Object} target - La div html appelée 'pixel' ciblée par l'event 'click'
   * @param {string} color - le style à utiliser
   */
  changeColor(target, color) {
    target.className = 'pixel ' + color
  }

  /**
   * Fonction qui crée le formulaire
   */

  createForm() {
    // On créé l'input 'taille de la grille'
    this.gridSize = document.createElement('input') || 8
    this.gridSize.classList.add('input-grid-size')
    this.gridSize.type = 'number'
    this.gridSize.min = 1
    this.gridSize.max = 25
    this.gridSize.value = 8
    this.gridSize.placeholder = 'Taille de la grille'
    this.formDisplay.appendChild(this.gridSize)

    // On créé le bouton de validation
    var submitButton = document.createElement('button')
    submitButton.classList.add('button')
    // On lui retire la capacité de validation du formulaire
    // submitButton.type = "submit";
    this.formDisplay.appendChild(submitButton)
    submitButton.textContent = 'Valider'

    // on crée une grille par défaut
    this.createInvaderGrid()

    // On ajoute un eventListener qui déclenchera la création de la grille
    this.formDisplay.addEventListener('submit', (evenement) => {
      evenement.preventDefault()
      this.createInvaderGrid()
    })
  }

  /**
   * Une fonction qui crée les boutons colorés et la box qui les contient
   */
  createColorSelectBox() {
    // Création de la boite
    var colorBox = document.createElement('div')
    colorBox.classList.add('colorBox')

    // Création des 'boutons'
    for (var nbFois = 4; nbFois > 0; nbFois--) {
      var name = 'colorBouton__' + nbFois
      var colorBtn = document.createElement('div')
      colorBtn.id = nbFois
      // Elle met une classe pour coloré chaque bouton
      colorBtn.classList.add('colorBtn')
      colorBtn.classList.add(name)
      colorBox.appendChild(colorBtn)

      // Elle crée aussi un eventListener par bouton
      colorBtn.addEventListener('click', (event) => {
        // - Retire la classe 'colorBtnBorder' aux autres boutons,
        var colorBtnBorder = document.getElementsByClassName('colorBtnBorder')

        while (colorBtnBorder.length) {
          colorBtnBorder.item(0).classList.remove('colorBtnBorder')
        }

        // - Met une classe au bouton activé pour repérer qu'il est sélectionné,
        event.target.classList.add('colorBtnBorder')

        // - Fixe le style sélectionné dans le paramètre de app.
        this.styleSelected = this.styles[
          parseInt(event.target.getAttribute('id')) - 1
        ]

        console.log(parseInt(event.target.getAttribute('id')) - 1)
        console.log(this.styleSelected)
      })
    }
    this.colorDisplay.appendChild(colorBox)
  }

  /**
   * Fonction qui gère la taille de la grille pour smartphone
   */
  checkMedia() {
    if (window.matchMedia('(max-width: 700px)').matches) {
      this.gridWidth = 200
      console.log('ça match ', this.gridWidth)
    } else {
      this.gridWidth = 350
      console.log('ça match pas', this.gridWidth)
    }
  }

  /**
   * Crée le formulaire et crée le listener qui déclenchera la création
   * de la grille.
   * Créé ensuite la boite contenant les boutons de choix de couleur.
   */
  init() {
    this.checkMedia()
    this.createForm()
    this.createColorSelectBox()
  }
}

export { PixelArt }
