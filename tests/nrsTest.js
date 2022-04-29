const { By } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

module.exports = {
    '@tags': 'nrs',

    'My Nrs test' (browser) {
        browser
            .url('https://www.p4b.ro/')
        // first button
       // Driver.findElement(By.xpath("(//input[@name='submit'])[2]")).click();
       // .getAttribute('a[href^="/career" class="router-link-active router-link-exact-active" data-v-eb89fbf8="" aria-current="page">Karierre</a>"]', 'src', src => {
            .assert.urlContains ('https://www.p4b.ro/')
            browser.getAttribute('#app > div.bg-blue.sticky.top-0.z-50.h-24.px-24.\32 xl\:px-40.flex.justify-between.hidden.sm\:flex > ul > li:nth-child(5) > p > a', 'href', function(result) {
                console.log('result', result);
              });
    }
};