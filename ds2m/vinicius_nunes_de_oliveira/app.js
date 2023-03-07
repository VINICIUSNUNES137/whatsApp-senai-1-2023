'use strict'

import { contatos } from './recursos/contatos.js'

//media__contacts
let i = 0

const criarContato = contato => {
  const card = document.createElement('button')
  card.classList.add('media__contacts')

  const img = document.createElement('img')
  img.classList.add('contact-img')
  img.src = `./${contato.image}`
  // img.src = '../img/' + contatos.image

  const messages = document.createElement('div')
  messages.classList.add('messages')

  const nome = document.createElement('h5')
  nome.classList.add('messages__name')
  nome.textContent = contato.name
  nome.id = 'card'

  const descricao = document.createElement('span')
  descricao.classList.add('messages__description')
  // descricao.textContent = contato.description
  let contador = 0

  descricao.textContent = contato.messages[2].content

  messages.append(nome, descricao)
  card.append(img, messages)
  card.id = i++

  return card
}

const carregarContatos = () => {
  const container = document.getElementById('container')
  const cards = contatos.map(criarContato)

  container.replaceChildren(...cards)

  cards.forEach(card => {
    card.onclick = () => {
      // let alo = document.querySelectorAll('#card2')
      // let alo = document.getElementById(card2.id)
      //   let cardIdd = document.getElementById(card)
      // console.log(contatos[card.id].image)
      const cardContainer2 = document.createElement('div')
      cardContainer2.classList.add('message__header')

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('group')

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

      header__contact.append(header__name, messages__description)

      cardContainer.append(imgCard, header__contact)
      cardContainer2.append(cardContainer)
      //   cardContainer2.append(cardContainer,conjIcon)
      const contentMessage = document.createElement('div')
      contentMessage.classList.add('message__content')

      const cardDaMensagem = document.createElement('div')
      cardDaMensagem.classList.add('message__content__card')
      //começa aquiiiiii
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
          cardDaMensagem.append(alignMe)
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
        contentMessage.appendChild(cardDaMensagem)
      })

      const containerMessage = document.getElementById('inside-message')

      containerMessage.replaceChildren(cardContainer2, contentMessage)

      //criando mensagens

      /* 
       <div class="message__content">
          <div class="content__me">
            <div class="me__align">
              <h5 class="me__send">me</h5>  //  /////
              <span class="me__message" />//////
                >Hello Leonid, how are you doing today?Hello Leonid, how are you
                doing today?Hello Leonid, how are you doing today?Hello Leonid,
                how are you doing today?Hello Leonid, how are you doing
                today?Hello Leonid, how are you doing today?Hello Leonid, how
                are you doing today?</span
              >
              <span class="me__date">14:25</span>
            </div>
          </div>*/
    }
  })
}

carregarContatos()