const { Builder, By,} = require('selenium-webdriver');
const fs = require('fs');


async function example() {

  const driver = await new Builder().forBrowser('chrome').build();

  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();

  let pages = ['07001','07002','07003','07004','07005','07006','07007','07008','07009','07010','07011','07012','07013','07014','07015'];
  
  for ( let page of pages) {

    await driver.get('https://www.just-eat.es/area/'+page+'-palma');

    await driver.findElement(By.xpath("/html/body/main/div[5]/div[4]/div/div/div/div/div/div/div[2]/button[1]")).click();

    let window = driver.findElement(By.xpath("/html"));
    for (let i = 0; i < 1; i++) {await driver.actions().scroll(0, 0, 0, 50000, window).perform();}

    let restaurantLinks = await driver.findElements(By.xpath("//a[@data-test-id='restaurant']"));
    let restaurantsHrefs = [];

    for ( let restaurantLink of restaurantLinks ) {
      restaurantsHrefs.push(await restaurantLink.getAttribute('href'));

    }

    for ( let restaurantHref of restaurantsHrefs) {
      await driver.get(restaurantHref);

      let restaurant = await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/div/main/header/div[1]/div/h1")).getText();
      // let minimumPrice = await driver.findElement(By.xpath("//*[@id='skipToMain']/header/section/div[2]/p[2]/span[1]")).getText();

      // console.log(restaurant)
      console.log(restaurant,date,page,restaurantsHrefs);
      let data = ","+ restaurant +","+ date +","+ page +","

      fs.appendFile('justEat.csv', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }




    

    
    // let minimumPrice = await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/div/main/header/section/div[2]/p[2]/span[1]")).getText();


    
  }


}

example();