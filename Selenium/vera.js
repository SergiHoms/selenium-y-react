// vera

const { Builder, By, until} = require('selenium-webdriver');
const fs = require('fs');

async function example() {

    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://tienda.comercialvera.eu/es/');

    let paginations = ["?page=2","?page=3","?page=4","?page=5","?page=6","?page=7","?page=8","?page=9","?page=10"]

    for (let pagination of paginations) {

        await driver.get('https://tienda.comercialvera.eu/es/3-carne'+ pagination);

        await driver.wait(until.elementLocated(By.xpath("//*[@id='js-product-list']/div[1]/div/div/div[1]/article/div/div[1]/a")), 10000).then( async () => {


        });

        let beefLinks = await driver.findElements(By.xpath("//a[@class='thumbnail product-thumbnail']"));
        let beefHrefs = [];

        for ( let beefLink of beefLinks ) {
            beefHrefs.push(await beefLink.getAttribute('href'));
        }

        for( let beefHref of beefHrefs ) {
           
            await driver.get(beefHref);

            let beefName = await driver.findElement(By.xpath("//h1[@itemprop='name']")).getText();

            let beefPrice = await driver.findElement(By.xpath("//span[@itemprop='price']")).getText();

            // let beefWeighType = await driver.findElement(By.xpath("//span[@class='control-label']")).getText();

            // let beefWeigh = await driver.findElement(By.xpath("//option[@selected='selected']")).getText();


            console.log(beefName,beefPrice)

            let extractData = ",Vera," + beefName + ","  + beefPrice + ","   + "\n";

            fs.appendFile('vera.csv', extractData, function (err) {
                if (err) throw err;
            });

                 
        }
       
    }

}

example();

