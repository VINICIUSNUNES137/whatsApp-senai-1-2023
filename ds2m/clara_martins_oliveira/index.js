'use strict'

import { contatos } from "./contatos.js"

const criarCard = (contato) =>{
    const card = document.createElement('div')
    card.classList.add('blockchat')

    const img = document.createElement('img')
    img.classList.add('card_image')
    img.src = `./img/${contato.image}`

    const sender = document.createElement('h2')
    sender.classList.add('sender')
    sender.textContent = contato.name

    const descricao = document.createElement('p')
    descricao.classList.add('description')
    descricao.textContent = contato.description

    card.append(img, sender, descricao)

    return card
}

const carregarContatos = () => {
    const chatList = document.getElementById('chatList')
    const cards = contatos.map(criarCard)

    chatList.append(...cards)
}



carregarContatos()