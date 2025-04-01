const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

async function startBrowser() {

    let options = new chrome.Options();
    options.excludeSwitches('enable-logging');
    options.addArguments('--user-data-dir=/whatsapp-session');
    options.addArguments('==profile-directory=Default');

    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://web.whatsapp.com/');
        await driver.wait(until.titleContains('WhatsApp'), 1000);
        console.log(await driver.getTitle());
    } catch (error) {
        console.log("Falhou inicialização")
    } finally {
        //await driver.quit(); COMENTEI ESSA LINHA PARA NÃO FECHAR O NAVEGADOR
    }
}
startBrowser();
