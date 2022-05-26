const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {

     // acesso ao form
     acessarOFormulario() { 
        cy.get(el.linkNovoArtigo).click()
     }
     
     // preencher form
     preencherOFormulario() {
        cy.get(el.inputTitle).type(articleName)
        cy.get(el.inputDescription).type('Descrição do artigo de testes')
        cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado')
        cy.get(el.inputTags).type('Cypress')
     }
     
     // submeter form
     submeterOFormulario() {
        cy.contains('button', 'Publish Article').click()
     }
    
     // verificar se o artigo foi criado
     verificarSeOArtigoFoiCriado() {
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)
     }
}

export default new Articles()