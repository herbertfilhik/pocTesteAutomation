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

    clicarOpcaoFindOwners() {
        cy.get(':nth-child(2) > a')
            .click()
    }

    clicarBtnAddOwner() {
        cy.get('a.btn')
            .click()
    }

    informarDados(
        firstName,
        lastName,
        address,
        city,
        telephone
    ) {
        cy.get('h2')
            .should(
                'contain.text',
                'Owner'
            )

        cy.get(':nth-child(1) > .col-sm-2')
            .should(
                'contain.text',
                'First Name'
            )

        cy.get(':nth-child(2) > .col-sm-2')
            .should(
                'contain.text',
                'Last Name'
            )

        cy.get(':nth-child(3) > .col-sm-2')
            .should(
                'contain.text',
                'Address'
            )

        cy.get(':nth-child(4) > .col-sm-2')
            .should(
                'contain.text',
                'City'
            )

        cy.get(':nth-child(5) > .col-sm-2')
            .should(
                'contain.text',
                'Telephone'
            )

        cy.get('#firstName')
            .type(firstName)
        cy.get('#lastName')
            .type(lastName)
        cy.get('#address')
            .type(address)
        cy.get('#city')
            .type(city)
        cy.get('#telephone')
            .type(telephone)
    }

    clicarBtnAddOwnerCadastro() {
        cy.xpath('/html/body/div/div/form/div[2]/div/button')
            .click()
    }

    validaRegistroNovo(
        firstName,
        lastName,
        address,
        city,
        telephone
    ) {

        cy.get(':nth-child(1) > td')
            .should(
                'contain.text',
                firstName + " " + lastName
            )

        cy.get(':nth-child(2) > td')
            .should(
                'contain.text',
                address
            )

        cy.get(':nth-child(3) > td')
            .should(
                'contain.text',
                city
            )

        cy.get(':nth-child(4) > td')
            .should(
                'contain.text',
                telephone
            )
    }

    buscarRegistro(lastName) {
        cy.get('#lastName')
            .type(lastName)
        cy.get('.col-sm-offset-2 > .btn')
            .click()
    }

    clicarNaOpcaoHome() {
        cy.get('.nav > :nth-child(1) > a')
            .click()
    }

    validaMsgDeErroRetornoNaoLocalizado() {
        cy.get('#search-owner-form')
            .should(
                'contain.text',
                'has not been found'
            )
    }

    validaMsgDeErroTelephone() {
        cy.get('.help-inline')
            .should(
                'contain.text',
                'valor númerico fora do limite (<10 dígito>.<0 dígitos> esperar)'
            )
    }
}