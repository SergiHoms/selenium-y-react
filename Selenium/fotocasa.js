// IDEALISTA

const { Builder, By, until} = require('selenium-webdriver');
const fs = require('fs');

async function example() {

    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.fotocasa.es/es/comprar/viviendas/illes-balears-provincia/mallorca/l');

    await driver.wait(until.elementLocated(By.xpath("//button[@data-testid='TcfAccept']")), 10000).click();

    let pages = 39;

    for (let i = 1; i <= pages; i++) {

        await driver.get('https://www.fotocasa.es/es/comprar/viviendas/illes-balears-provincia/mallorca/l'+'/'+i);

        await driver.executeScript('document.body.style.zoom="1%"');

        let names = await driver.findElement(By.xpath("//h3[@class='re-CardHeader']/span/strong[1]")).getText();

        let prices = await driver.findElement(By.xpath("//span[@class='re-CardPrice']")).getText();

        let rooms = await driver.findElement(By.xpath("//span[@class='re-CardFeaturesWithIcons-feature-icon re-CardFeaturesWithIcons-feature-icon--rooms']")).getText();

        let squareMeters = await driver.findElement(By.xpath("//span[@class='re-CardFeaturesWithIcons-feature-icon re-CardFeaturesWithIcons-feature-icon--surface']")).getText(); 


        console.log(names,prices,rooms,squareMeters) 

        let extractData = ",fotocasa," + names + ","  + prices + "," + rooms + "," + squareMeters + "\n";

            fs.appendFile('fotocasa.csv', extractData, function (err) {
                if (err) throw err;
        });
        
    }

}

example();