/// <reference types="cypress" />

import Articles from '../support/pages/articles'

describe('Articles', () => {

        beforeEach(() => {
         
            cy.login()
    
            cy.visit('/')
        })

    it('Cadastro de novo artigo com sucesso', () => {
        
        //Fluxo de criação do artigo

        // acesso ao form
        Articles.acessarOFormulario()

        // preencher form
        Articles.preencherOFormulario()

        // submeter form
        Articles.submeterOFormulario()

        // verificar se o artigo foi criado
        Articles.verificarSeOArtigoFoiCriado()
    });
});