document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'semibreve',
      img: 'images/semibreve.png'
    },
    {
      name: 'minima',
      img: 'images/minima.png'
    },
    {
      name: 'seminima',
      img: 'images/seminima.png'
    },
    {
      name: 'colcheia',
      img: 'images/colcheia.png'
    },
    {
      name: 'semicolcheia',
      img: 'images/semicolcheia.png'
    },
    {
      name: 'fusa',
      img: 'images/fusa.png'
    },
    {
      name: 'semibreve',
      img: 'images/semibreve4.png'
    },
    {
      name: 'minima',
      img: 'images/minima12.png'
    },
    {
      name: 'seminima',
      img: 'images/seminima14.png'
    },
    {
      name: 'colcheia',
      img: 'images/colcheia18.png'
    },
    {
      name: 'semicolcheia',
      img: 'images/semicolcheia116.png'
    },
    {
      name: 'fusa',
      img: 'images/fusa132.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Você clicou na mesma imagem!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou uma combinação!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Que pena, tente novamente!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Parabéns! Você encontrou todas as combinações!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
