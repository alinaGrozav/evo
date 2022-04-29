module.exports = {
    '@tags': 'evoNew',

    'Evo test case' (browser) {
        browser
        
            .maximizeWindow()    
            .url('http://evo-dev.hmm.lan/login')
            .waitForElementVisible('[placeholder="Benutzername"]')
            .click('[placeholder="Benutzername"]')
            .setValue('input[placeholder="Benutzername"]', 'asklepiosevo.abenea')
            .waitForElementVisible('[placeholder="Kennwort"]')
            .click('[placeholder="Kennwort"]')
            .setValue('input[placeholder="Kennwort"]', 'Ungam+20')
            
            browser
                .click('[tabindex="3"]')
                .assert.urlContains('regulation')
                
            
            browser
                .click('[class="col-2"] > app-left-nav > div:nth-child(6)')
                .assert.urlContains('patients')
                
            browser

                .waitForElementVisible('[id="patientSearch"]')
                .setValue('[id="patientSearch"]', 'Durk')
                .click('[for="patientSearch"]')
                .waitForElementVisible('[class="datatable-body"]')
                .getText('[class="datatable-row-center datatable-row-group"]', function(result) {
                    console.log('Search result:', result.value);
                  })
                .click('[class="cursor-pointer custom-icon"]')
                .assert.urlContains('m16')
                .waitForElementVisible('[placeholder="Nummer, PZN oder Bezeichnung"]')
                .setValue('[placeholder="Nummer, PZN oder Bezeichnung"]', '21.43.01.3003')
                .pause(1000)
                .click('[class="datatable-body-row datatable-row-even row-priority"]')
                .setValue('[placeholder="weitere Diagnosen"]', 'E10 - Diabetes mellitus, Typ 1')
                .pause(1000)
                .click('[class="datatable-body-cell-label"]')
                .pause(500)
                .click('[class="d-none d-xl-flex mb-2 patient-type w-100 justify-content-between ng-untouched ng-pristine ng-valid"] > div:nth-child(7)')
                .pause(1000)
                .click('[class="my-4"] [placeholder="Keine Daten ausgewählt"]')
                .pause(1500)
                .useXpath().click('/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]/span')
                .useCss().click('[class="btn btn-orange px-3"]')
                .pause(1000)
                .useXpath().waitForElementVisible('/html/body/modal-container/div/div/app-additions-modal-component')
                .pause(1000)
                .click('/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/div/div')
                .pause(1000)
                .click('/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]')
                .useCss().click('[class="btn btn-orange px-3"]')
                .useXpath().click('/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/div/div/div[2]/input')
                .pause(1000)
                .click('/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]')
                .useCss().click('[class="btn btn-orange px-3"]')
                .waitForElementVisible('[class="form-element mb-2"]>[class="row no-gutters"]>[class="col-12"]>[formcontrolname="tenDigitReason"]')
                .click('[class="col-12"]:nth-child(2)>app-input>div>input')
                .setValue('[class="col-12"]:nth-child(2)>app-input>div>input', 'eve')
                .click('[class="col-2 col-xs-12 col-sm-12 col-xl-2 d-flex pl-xl-0 mt-xl-0 align-items-xl-center justify-content-center"]>[class="order-section pl-xl-0 mt-xs-4 text-xl-left w-100"]>[formcontrolname="dataAccepted"]')
                .click('[class="col-2 col-xs-12 col-sm-12 col-xl-2 d-flex pl-xl-0 mt-xl-0 align-items-xl-center justify-content-center"]>[class="order-section pl-xl-0 mt-xs-4 text-xl-left w-100"]>[formcontrolname="dataRecommended"]')
                .click('[class="ng-input"]>input')
                .useXpath().click('/html/body/app-root/app-regulation/div/div/div/div[2]/div/app-m16/div/div/form/div/div[2]/div/div[1]/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[1]/span')
                .useCss().click('[class="btn btn-red btn-lg"]')
                .useXpath().click('/html/body/modal-container/div/div/app-multiple-le-modal/div/div/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[2]/datatable-body-cell[2]/div/span')
                .useCss().waitForElementVisible('[class="btn btn-orange px-5"]')
                .click('[class="btn btn-orange px-5"]')

            browser
                .click('[class="btn btn-orange px-5 m-2"]')
                .saveScreenshot('tests_output/google.png')
                 .getText('[class="py-4"]', function(result) {
                   console.log('result', result);
                    });

            browser
                .click('[class="btn btn-primary px-5"]')
                

                }
            }         