module.exports = {
    url: 'http://evo-dev.hmm.lan/login',
    elements: {
        usernameLogin: 'input[placeholder="Benutzername"]',
        passwordLogin: 'input[placeholder="Kennwort"]',
        buttonLogin: '[tabindex="3"]',
    },
    // commmands: [{
    //     loginCustom() {
    //         return this
    //             .waitForElementVisible('@usernameLogin')
    //             .click('@usernameLogin')
    //             .setValue('@usernameLogin', 'asklepiosevo.abenea')
    //             .click('@passwordLogin')
    //             .setValue('@passwordLogin', 'Ungam+20')
    //             .click('@buttonLogin')
    //     }
    // }]
}
