module.exports = {
    url: 'http://evo-dev.hmm.lan/account/patients/list',
    elements: {

        menuPatient: '[class="col-2"] > app-left-nav > div:nth-child(6)',
        searchInput: '[id="patientSearch"]',
        searchButton: '[for="patientSearch"]',
        datatable: '[class="datatable-body"]',
        datatableRow: '[class="datatable-row-center datatable-row-group"]',
        formButton: '[class="cursor-pointer custom-icon"]',


    },
    commmands: [{}]
}