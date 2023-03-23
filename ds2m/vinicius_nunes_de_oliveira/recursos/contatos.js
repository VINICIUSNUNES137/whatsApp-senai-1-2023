'use strict'

 const contatos = async () => {

    const url = `http://localhost:8080/v1/senai/contato?uf=3`

    const response =  await fetch(url)
    const data = await response.json()

    return data.contatos

}

module.exports = { contatos }