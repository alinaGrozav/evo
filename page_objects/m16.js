module.exports = {
    url: 'http://evo-dev.hmm.lan/regulation/m16',
    elements: {
        
        inputHimi: '[placeholder="Nummer, PZN oder Bezeichnung"]',
        searchResultHimi: '[class="datatable-body-row datatable-row-even row-priority"]',
        inputDiag: '[placeholder="weitere Diagnosen"]',
        datatableDiag: '[class="p-5 position-relative"]',
        searchResultDiag: '[class="datatable-body-cell-label"]',
        checkboxVo: '[class="d-none d-xl-flex mb-2 patient-type w-100 justify-content-between ng-untouched ng-pristine ng-valid"] > div:nth-child(7)',
        
        inputErsatz: {
            selector: '/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/div/div',
            locateStrategy: 'xpath'
        },
        
        valueVerloren: {
            selector: '/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]',
            locateStrategy: 'xpath'
        },
        inputHinweis: {
            selector: '[class="my-4"] [placeholder="Keine Daten ausgewählt"]',
            localStrategy: 'css'
        },
            
        valueIct: {
            selector: '/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]/span',
            locateStrategy: 'xpath'
        },
            buttonOk: '[class="btn btn-orange px-3"]',

        inputTherapie: {
            selector:'/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/div/div/div[2]/input',
            locateStrategy: 'xpath'
        },
        
            valueUnterz:{
                selector:'/html/body/modal-container/div/div/app-additions-modal-component/div/div[1]/app-info-item/div/div/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[2]',
                locateStrategy: 'xpath'
            },
             
            
        inputReason: '[class="form-element mb-2"]>[class="row no-gutters"]>[class="col-12"]>[formcontrolname="tenDigitReason"]',
        inputBegruendung: '[class="col-12"]:nth-child(2)>app-input>div>input',
        toggleDataAccepted: '[class="col-2 col-xs-12 col-sm-12 col-xl-2 d-flex pl-xl-0 mt-xl-0 align-items-xl-center justify-content-center"]>[class="order-section pl-xl-0 mt-xs-4 text-xl-left w-100"]>[formcontrolname="dataAccepted"]',
        toggleDataRecommended: '[class="col-2 col-xs-12 col-sm-12 col-xl-2 d-flex pl-xl-0 mt-xl-0 align-items-xl-center justify-content-center"]>[class="order-section pl-xl-0 mt-xs-4 text-xl-left w-100"]>[formcontrolname="dataRecommended"]',
        dropdownLe: '[class="ng-input"]>input',
        valueLe: {
            selector: '/html/body/app-root/app-regulation/div/div/div/div[2]/div/app-m16/div/div/form/div/div[2]/div/div[1]/app-select/div/div/ng-select/ng-dropdown-panel/div/div[2]/div[1]/span',
            locateStrategy: 'xpath'
        },
        
        buttonSend: '[class="btn btn-red btn-lg"]',

        resultLe: {
            selector: '/html/body/modal-container/div/div/app-multiple-le-modal/div/div/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[2]/datatable-body-cell[2]/div/span',
            locateStrategy: 'xpath'
        },
        
        buttonOkLe: '[class="btn btn-orange px-5"]',
        buttonConfirm: '[class="btn btn-orange px-5 m-2"]',
        formSubmitted: '[class="py-4"]',
        buttonCloseWindow: '[class="btn btn-primary px-5"]',
        

    },
    commmands: [{

        selectValueErsatz: function() {
            return this
                .useXpath()
                .waitForElementPresent('@inputErsatz')
        },

        selectValueVerloren: function() {
            return this
                .useXpath()
                .waitForElementPresent('@valueVerloren')
        },

        selectInputHinweis: function() {
            return this
                .useCss()
                .waitForElementPresent('@inputHinweis')
        },

        selectValueIct: function() {
            return this
                .useXpath()
                .waitForElementPresent('@inputHinweis')
        },
        
    }]
}