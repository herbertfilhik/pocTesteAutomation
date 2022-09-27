/// <reference types="Cypress" />

let baseUrl = Cypress.env('baseUrlSubmarinoBFF')
const faker = require('faker-br')
const { HomePage } = require('../../../support/page_elements/home')
const dataJson = require('../../../fixtures/sacola.json')

describe('Validar portal de comercio online Submarino', () => {
    const homePage = new HomePage()
    let requestOperationName = baseUrl + 'graphql?operationName=getCart&variables=%7B%22cartId%22%3A%22dd0558a0-d9b8-41cc-8df1-ef99273a6a7d%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22277b1b97c890d42ddac80cb205a2e1403b35056f7377000fd6c176ef47117dfe%22%7D%7D'
    let requestCardGrid = baseUrl + 'graphql?operationName=productCardGridQueryDesktopAcom&variables=%7B%22productId%22%3A%223060873444%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2252e5f9f2405f213b623aa7c4bb354ebca445e08221ad54f66a59de0593bbc143%22%7D%7D'
    let requestproductCardGridQueryDesktopAcom = baseUrl + 'graphql?operationName=productCardGridQueryDesktopAcom&variables=%7B%22productId%22%3A%22134577446%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2252e5f9f2405f213b623aa7c4bb354ebca445e08221ad54f66a59de0593bbc143%22%7D%7D'
    let requestSacola = 'https://sacola.submarino.com.br/api/v1/payment-bff/session/create'

    before(() => {
    })

    afterEach(() => {
        cy.screenshot()
    })

    context('Cenario: Requests Submarino', () => {
        it(`Dado que esteja no site da Submarino e acesse a busca
            E valide o retorno da busca
            E escolha um produto na lista
            E adicione ao carrinho
            Entao valide o item no carrinho`, () => {            
                cy.request({
                    method: 'GET',
                    url: requestOperationName,
                    headers: {
                        'content-type': 'application/json'
                    },                    
                }).then(function (response){
                    expect(response.status).equal(200)
                    expect(JSON.stringify(response.body)).is.not.empty
                    expect((response.body.data.cart.lines[0].product.name)).to.have.string("Smart TV LG OLED 65\" 4K OLED65C1 120hz G-Sync Freesync 4x HDMI 2.1 Inteligência Artificial Thinq Google Alexa")
                })

                cy.request({
                    method: 'GET',
                    url: requestCardGrid,
                    headers: {
                        'content-type': 'application/json'
                    },                    
                }).then(function (response){
                    expect(response.status).equal(200)
                    expect(JSON.stringify(response.body)).is.not.empty
                    expect((response.body.data.product.name)).to.have.string("Smart TV 65\" Samsung Qled 4k 65Q60A Modo Game Som Em Movimento Virtual Tela Sem Limites Design Slim")
                })

                cy.request({
                    method: 'GET',
                    url: requestproductCardGridQueryDesktopAcom,
                    headers: {
                        'content-type': 'application/json'
                    },                    
                }).then(function (response){
                    expect(response.status).equal(200)
                    expect(JSON.stringify(response.body)).is.not.empty
                    expect((response.body.data.product.name)).to.have.string("Cadeira de Escritório Presidente com Massagem Preta - Office Basics")
                })

                cy.request({
                    method: 'POST',
                    url: requestSacola,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: dataJson
                }).then(function (response){
                    expect(response.status).equal(200)
                    expect(JSON.stringify(response.body)).is.not.empty
                    expect((response.body.meta.screen)).to.have.string("BASKET")
                    expect((response.body.meta.context.b2wChannel)).to.have.string("INTERNET")
                    expect((response.body.components[0].payload.products[0].payload.name)).to.have.string("Smart TV LG OLED 65\" 4K OLED65C1 120hz G-Sync Freesync 4x HDMI 2.1 Inteligência Artificial Thinq Google Alexa")
                })
        })
    })
})