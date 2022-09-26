export class HomePage {
    realizarBuscaItem(buscaItem) {
        cy.get('.search__InputUI-sc-k1smv5-2')
            .should('be.visible')
            .type(buscaItem)

        cy.xpath('//*[@id="rsyswpsdk"]/div/header/div[1]/div[1]/div/div[1]/form/button')
            .should('be.visible')
            .click()   
    }

    validarItemRetorno() {
        cy.xpath('/html/body/div[1]/div/div/main/div/div[3]/div[2]/div[1]/div/div/a/div[2]/div[2]/h3')            
            .should('contain.text', 'Smart TV LG OLED 65" 4K OLED65C1 120hz G-Sync Freesync 4x HDMI 2.1 Inteligência Artificial Thinq Google Alexa')
            .click()

        cy.get('.src__Title-sc-1xq3hsd-0')            
            .should('contain.text', 'smart tv lg oled 65" 4k oled65c1 120hz g-sync freesync 4x hdmi 2.1 inteligência artificial thinq google alexa')
    }

    incluirItemNoCarrinho(){
        cy.get('.src__ButtonUI-sc-1cpjf6b-3')
            .should('be.visible')
            .click()

        cy.get('.continue-button__Button-sc-1j23ixj-0')
            .should('be.visible')

        cy.get('.product-info__TextBold-sc-1vd4mog-1')  
            .should('be.visible')
            .should('contain.text', 'Smart TV LG OLED 65" 4K OLED65C1 120hz G-Sync Freesync 4x HDMI 2.1 Inteligência Artificial Thinq Google Alexa')
    }
}