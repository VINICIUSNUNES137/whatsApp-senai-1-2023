'use strict'
window.addEventListener('resize', function () {
  location.reload()
})


const largura = window.screen.width
let i = 0
let contUser = 0

const criarContato = contato => {
  const card = document.createElement('div')
  card.classList.add('media__contacts')

  const img = document.createElement('img')
  img.classList.add('contact-img')
  img.src = `./${contato.image}`

  const messages = document.createElement('div')
  messages.classList.add('messages')

  const nome = document.createElement('h5')
  nome.classList.add('messages__name')
  nome.textContent = contato.name
  nome.id = 'card'

  const descricao = document.createElement('span')
  descricao.classList.add('messages__description')

  descricao.textContent = contato.messages[2].content

  messages.append(nome, descricao)
  card.append(img, messages)
  card.id = i++

  return card
}

const carregarContatos = async (link) => {


  const url = link

  const response = await fetch(url)
  const data = await response.json()
  const contatos = await data.contatos

  const container = document.getElementById('container')
  const cards = contatos.map(criarContato)

  container.replaceChildren(...cards)

  cards.forEach(card => {
    card.onclick = () => {

      const headerMessage = document.createElement('div')
      headerMessage.classList.add('message__header')
      //aaa
      const headerImgClip = document.createElement('img')
      headerImgClip.src = './img/menu-aberto.png'

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('group')

      const menuBotao = document.createElement('button')
      menuBotao.classList.add('botaoMenu')

      const imgMenu = document.createElement('img')
      imgMenu.src = './img/left-chevron.png'

      const imgCard = document.createElement('img')
      imgCard.classList.add('contact-img')
      imgCard.src = `./${contatos[card.id].image}`

      const header__contact = document.createElement('div')
      header__contact.classList.add('header__contact')

      const header__name = document.createElement('h5')
      header__name.classList.add('messages__name')
      header__name.textContent = contatos[card.id].name

      const messages__description = document.createElement('span')
      messages__description.classList.add('messages__description')
      messages__description.textContent = contatos[card.id].description

      //APPEND
      menuBotao.append(imgMenu)
      header__contact.append(header__name, messages__description)
      cardContainer.append(menuBotao, imgCard, header__contact)
      headerMessage.append(cardContainer, headerImgClip)

      const contentMessage = document.createElement('div')
      contentMessage.classList.add('message__content')

      const cardDaMensagem = document.createElement('div')
      cardDaMensagem.classList.add('message__content__card')

      contatos[card.id].messages.forEach(function (mensagem) {
        if (mensagem.sender == 'me') {
          const meContent = document.createElement('div')
          meContent.classList.add('content__me')

          const alignMe = document.createElement('div')
          alignMe.classList.add('me__align')

          const sendMe = document.createElement('h5')
          sendMe.classList.add('me__send')
          sendMe.textContent = mensagem.sender

          const messageMe = document.createElement('h5')
          messageMe.classList.add('me__message')
          messageMe.textContent = mensagem.content

          const dateMe = document.createElement('span')
          dateMe.classList.add('me__date')
          dateMe.textContent = mensagem.time

          alignMe.append(sendMe, messageMe, dateMe)
          meContent.append(alignMe)
          cardDaMensagem.append(meContent)
        } else {
          const otherContent = document.createElement('div')
          otherContent.classList.add('content__other')

          const alignOther = document.createElement('div')
          alignOther.classList.add('other__align')

          const sendOther = document.createElement('h5')
          sendOther.classList.add('other__send')
          sendOther.textContent = mensagem.sender

          const messageOther = document.createElement('h5')
          messageOther.classList.add('other__message')
          messageOther.textContent = mensagem.content

          const dateOther = document.createElement('span')
          dateOther.classList.add('other__date')
          dateOther.textContent = mensagem.time

          alignOther.append(sendOther, messageOther, dateOther)
          cardDaMensagem.append(alignOther)
        }




        contentMessage.replaceChildren(cardDaMensagem)
      })

      const footer = document.createElement('div')
      footer.classList.add('message__footer')

      const footerImgPhone = document.createElement('img')
      footerImgPhone.src = './img/microphone.png'

      const footerInput = document.createElement('input')
      footerInput.placeholder = 'Digite aqui sua mensagem'

      const footerImgClip = document.createElement('img')
      footerImgClip.src = './img/clip.png'

      footer.append(footerImgPhone, footerInput, footerImgClip)

      const containerMessage = document.getElementById('inside-message')

      containerMessage.replaceChildren(headerMessage, contentMessage, footer)

      const getMedia = document.getElementById('media')
      menuBotao.onclick = () => {
        containerMessage.style.display = 'none'
        container.style.display = 'block'
        getMedia.style.display = 'block'
      }
      if (largura <= 640) {
        containerMessage.style.display = 'block'
        container.style.display = 'none'
        getMedia.style.display = 'none'
        // getMedia.style.maxWidth = '100vw'
      } else {
        containerMessage.style.display = 'block'
        container.style.display = 'block'
        getMedia.style.display = 'block'
      }
    }
  })
}

function displays() {
  document.getElementById('containerInicial').style.display = 'none'
}


const criarUsuario = async () => {



  const pessoaCard = document.createElement('div')
  pessoaCard.classList.add('card-pessoa')
  pessoaCard.id = contUser
  contUser++

  const imgUser = document.createElement('img')
  imgUser.classList('imagem-pessoa')
  imgUser.src = user.profile - image

  const nameUser = document.createElement('p')
  nameUser.textContent = user.nickname
  nameUser.classList.add('nome-pessoa')

  pessoaCard.append(imgUser, nameUser)

  return pessoaCard

}

const carregarUsuario = async () => {

  const response = await fetch(`https://api-whats-production-9b7c.up.railway.app/v1/senai/contato?uf=0`)
  const data = await response.json()
  const user = await data

  const containerUsers = document.getElementById('card-container')
  const users = user.map(criarUsuario)

  container.replaceChildren(...user)
}


{/* <div class="containerInicial" id="containerInicial">
<p class="selecione">SELECIONE UM PERFIL</p>
<div class="card" id="card-container">
  <div class="card-pessoa" id="card-1">
<img class="imagem-pessoa" src="./img/contact1.png" alt="">
<p class="nome-pessoa">Pessoa 1</p>
</div> */}


let pessoa1 = document.getElementById(`card-1`)
pessoa1.addEventListener('click', function () {
  let url = `https://api-whats-production-9b7c.up.railway.app/v1/senai/contato?uf=0`
  carregarContatos(url)
  displays()

})

let pessoa2 = document.getElementById(`card-2`)
pessoa2.addEventListener('click', function () {
  let url = `https://api-whats-production-9b7c.up.railway.app/v1/senai/contato?uf=1`
  carregarContatos(url)
  displays()

})

let pessoa3 = document.getElementById(`card-3`)
pessoa3.addEventListener('click', function () {
  let url = `https://api-whats-production-9b7c.up.railway.app/v1/senai/contato?uf=2`
  carregarContatos(url)
  displays()

})

let pessoa4 = document.getElementById(`card-4`)
pessoa4.addEventListener('click', function () {
  let url = `https://api-whats-production-9b7c.up.railway.app/v1/senai/contato?uf=3`
  carregarContatos(url)
  displays()
})


