module.exports = {
    '@tags': 'first',
        'My first test case' (browser) {
            browser
                .url('https://www.google.com/')
                .waitForElementVisible('#L2AGLb')
                .click('#L2AGLb')
                .waitForElementVisible('#gb > div > div:nth-child(1) > div > div:nth-child(1) > a')
                .click('#gb > div > div:nth-child(1) > div > div:nth-child(1) > a')
                .click('a[href^="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"]')
                .setValue('#identifierId', 'alinaelenag')
                .click('#identifierNext')
                .saveScreenshot('tests_output/google.png')
                .setValue('#password', 'Auroraboreala11')
            }

}