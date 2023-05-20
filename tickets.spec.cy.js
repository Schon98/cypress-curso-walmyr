
describe('Tickets', () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    it ("preenchendo o cadastro", () =>{

        
        cy.get('#first-name').type("Matheus Robert");
        cy.get('#last-name').type("Santana Schon");
        cy.get('#email').type("mschon98@gmail.com");
        cy.get('#requests').type("Prato comum");


    });

    it('seleção de dois tickets', () => {
        cy.get('#ticket-quantity').select("2");
        
    });

    it('seleção do tipo de ticket Vip', () => {
        cy.get('#vip').check();
        
    });

    it('seleção de como viu o evento', () => {
        cy.get('#social-media').check();
    });
    
    it('selecionar dois elementos, depois deselecionar um deles', () => {
        cy.get('#social-media').check();
        cy.get('#publication').check();
        cy.get('#publication').uncheck();

    });
    
    it('verificando se há a palavra', () => {
        cy.get("header h1").should("contain", "TICKETBOX");

    });
    it('verificar se há erro no formato do email', () => {
        cy.get('#email')
        .as("email")
        .type("mschon98-gmail.com");
        
        cy.get('#email.invalid')
        .as("invalidEmail")
        .should("exist");

        cy.get("@email")
        .clear()
        .type("mschon98@gmail.com");

        cy.get("@invalidEmail").should("not.exist");

    });
    it.only('preencher todo o formulário e depois apaga-lo', () => {
        
        const firstName = "Matheus Robert";
        const lastName = "Santana Schon";
        const fullName = `${firstName} ${lastName}`;

        
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("mschon98@gmail.com");
        cy.get('#requests').type("Prato comum");
        cy.get('#ticket-quantity').select("2");
        cy.get('#vip').check();
        cy.get('#social-media').check();
        cy.get('#social-media').check();
        cy.get('#publication').check();

        cy.get(".agreement p").should("contain", 
        `Eu, ${fullName} comprei dois tickets.`);

        //cy.get('#agree').check();

        

    });

    
    
    

    
});
