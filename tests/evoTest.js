module.exports = {
    '@tags': 'evo',

    'Evo test case'(browser) {

        const login = browser.page.login();
        const patients = browser.page.patientList();
        const m16 = browser.page.m16();

        login
            .maximizeWindow()
            .navigate()
            

        login
            .loginCustom()

            // .waitForElementVisible('@usernameLogin')
            // .click('@usernameLogin')
            // .setValue('@usernameLogin', 'asklepiosevo.abenea')
            // .click('@passwordLogin')
            // .setValue('@passwordLogin', 'Ungam+20')
            // .click('@buttonLogin')
            .assert.urlContains('regulation')


        patients
            .click('@menuPatient')
            .assert.urlContains('patients')

        patients

            .waitForElementVisible('@searchInput')
            .setValue('@searchInput', 'Durk')
            .click('@searchButton')
            .waitForElementVisible('@datatable')
            .getText('@datatableRow', function (result) {
                console.log('Search result:', result.value);
            })
            .click('@formButton')
            .assert.urlContains('m16')

        m16
            .waitForElementVisible('@inputHimi')
            .setValue('@inputHimi', '21.43.01.3003')
            .pause(1000)
            .click('@searchResultHimi')
            .setValue('@inputDiag', 'E10 - Diabetes mellitus, Typ 1')
            .pause(1000)
            .click('@searchResultDiag')
            .pause(500)
            .click('@checkboxVo')
            .pause(1000)
            .click('@inputErsatz')
            .pause(1500)
            .click('@valueVerloren')
            .click('@buttonOk')
            .pause(1000)
            .click('@inputHinweis')
            //.pause(1000)
            .click('@valueIct')
            .click('@buttonOk')
            .pause(1000)
            .click('@inputTherapie')
            .pause(1000)
            .click('@valueUnterz')
            .click('@buttonOk')
            .waitForElementVisible('@inputReason')
            .click('@inputBegruendung')
            .setValue('@inputBegruendung', 'eve')
            .click('@toggleDataAccepted')
            .click('@toggleDataRecommended')
            .click('@dropdownLe')
            .click('@valueLe')
            .click('@buttonSend')
            .click('@resultLe')
            .waitForElementVisible('@buttonOkLe')
            .click('@buttonOkLe')


            .click('@buttonConfirm')
            .saveScreenshot('tests_output/google.png')
            .getText('@formSubmitted', function (result) {
                console.log('result', result);
            })


            .click('@buttonCloseWindow')


    }
}         