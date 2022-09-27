/// <reference types="Cypress" />

let baseUrl = Cypress.env('baseUrlMagalu')
const faker = require('faker-br')
const { HomePageMagalu } = require('../../../support/page_elements/homeMagalu')

describe('Validar portal de comercio online Magalu', () => {
        const homePage = new HomePageMagalu()

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

    context('Cenario: Validar portal de comercio online Magalu', () => {

        let buscaItem = 'iPhone 11 Apple 64GB Branco 6,1” 12MP iOS'

        it(`Dado que esteja no site da Magalu e acesse a busca
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
