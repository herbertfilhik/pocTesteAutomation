/// <reference types="Cypress" />

let baseUrl = Cypress.env('baseUrlSubmarino')
const faker = require('faker-br')
const { HomePage } = require('../../../support/page_elements/home')

describe('Validar portal de comercio online Submarino', () => {
    const homePage = new HomePage()

    before(() => {
        cy.visit(baseUrl, {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            },
        })
    })

    afterEach(() => {
        cy.screenshot()
    })

    context('Cenario: Validar portal de comercio online Submarino', () => {

        let buscaItem = 'Smart TV LG OLED 65" 4K OLED65C1 120hz G-Sync Freesync 4x HDMI 2.1 Inteligência Artificial Thinq Google Alexa'

        it(`Dado que esteja no site da Submarino e acesse a busca
            E valide o retorno da busca
            E escolha um produto na lista
            E adicione ao carrinho
            Entao valide o item no carrinho`, () => {            
            cy.log(buscaItem)

            homePage.realizarBuscaItem(buscaItem)
            homePage.validarItemRetorno()
            homePage.incluirItemNoCarrinho()
        })
    })
})
