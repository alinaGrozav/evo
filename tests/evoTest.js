module.exports = {
    '@tags': 'evo',

    'Evo test case'(browser) {

        const alina = browser.page.login();
        const patients = browser.page.patientList();
        const m16 = browser.page.m16();

        browser
            .url('http://evo-dev.hmm.lan/login')
            .maximizeWindow()
        alina
            .loginCustom()

            // .waitForElementVisible('@usernameLogin')
            // .click('@usernameLogin')
            // .setValue('@usernameLogin', 'asklepiosevo.abenea')
            // .click('@passwordLogin')
            // .setValue('@passwordLogin', 'Ungam+20')
            // .click('@buttonLogin')
            //.assert.urlContains('regulation')


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
            .click('@inputHinweis')
            .pause(1500)
        // .click('@valueIct')
        // .useCss().click('@buttonOk')
        // .pause(1000)
        // .useXpath().waitForElementVisible('@valueIct')
        // .pause(1000)
        // .click('@inputErsatz')
        // .pause(1000)
        // .click('@valueVerloren')
        // .useCss().click('[class="btn btn-orange px-3"]')
        // .useXpath().click('@inputTherapie')
        // .pause(1000)
        // .click('@valueUnterz')
        // .useCss().click('[class="btn btn-orange px-3"]')
        // .waitForElementVisible('@inputReason')
        // .click('@inputBegruendung')
        // .setValue('@inputBegruendung', 'eve')
        // .click('toggleDataAccepted')
        // .click('toggleDataRecommended')
        // .click('@dropdownLe')
        // .useXpath().click('@valueLe')
        // .useCss().click('@buttonSend')
        // .useXpath().click('@resultLe')
        // .useCss().waitForElementVisible('@buttonOkLe')
        // .click('@buttonOkLe')


        // .click('@buttonConfirm')
        // .saveScreenshot('tests_output/google.png')
        // .getText('@formSubmitted', function (result) {
        //     console.log('result', result);
        // })


        // .click('@buttonCloseWindow')


    }
}         