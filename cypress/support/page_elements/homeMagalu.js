export class HomePageMagalu {
    realizarBuscaItem(buscaItem) {
        cy.get('[data-testid="input-search"]')
            .should('be.visible')
            .type(buscaItem)
        
        cy.get('[data-testid="search-submit"]')
            .should('be.visible')
            .click()   
    }

    validarItemRetorno() {
        cy.wait(5000)

        cy.scrollTo('top')

        cy.xpath('/html/body/div[1]/div/main/section[4]/div[3]/div/ul/li[1]/a/div[3]/h2')
            .should('be.visible')
            .should('contain.text', 'iPhone 11 Apple 64GB Branco 6,1” 12MP iOS')
            .click()
    }

    incluirItemNoCarrinho(){
        cy.wait(5000)

        cy.scrollTo('top')

        cy.xpath('/html/body/div[1]/div/main/section[2]/div[2]/h1')
            .should('be.visible')
            .should('contain.text', 'iPhone 11 Apple 64GB Branco 6,1” 12MP iOS')

        cy.get('.koebNd > div > [data-testid="bagButton"] > .sc-ikJyIC')
            .should('be.visible')
            .should('contain.text', 'Adicionar à Sacola')
            .click()

        cy.wait(5000)
        cy.scrollTo('bottom')


        cy.wait(5000)
        cy.get('.sc-ikJyIC')
            .should('be.visible')
            .should('contain.text', 'Ir para sacola')            

        cy.get('[data-testid="summary-continue-btn"]')
            .should('be.visible')
            .click()
    }
}