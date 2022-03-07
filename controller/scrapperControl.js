const puppeteer = require("puppeteer");
const scrapmobile = async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&q=mobiles&otracker=categorytree"
    );
    const mobiledata = await page.evaluate(() => {
      let mobiledatastore = [];
      let mobilestatus = document.getElementsByClassName("_3pLy-c row");
      for (let i = 0; i < mobilestatus.length; i++) {
        let name = mobilestatus.item(i);
        
         let mobileheaderdata = name.getElementsByClassName('_4rR01T')[0].innerText;
        let pricedata =
          name.getElementsByClassName("_30jeq3 _1_WHN1")[0].innerText;
        mobiledatastore[i] = {
          productname: mobileheaderdata,
          price: pricedata,
        };
      }
      return mobiledatastore;
    });
    res.send(mobiledata);
    await browser.close();
  } catch (error) {
    console.log(error);
    res.json({
      status: 0,
      message: error,
    });
  }
};
module.exports = { scrapmobile };
