const { default: async } = require("async");
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

        let mobileheaderdata =
          name.getElementsByClassName("_4rR01T")[0].innerText;
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
const scraptshirt = async(req,res) =>{
    try{ const browser = await puppeteer.launch({
        dumpio: true
   });
        const page = await browser.newPage();
        await page.goto("https://www.snapdeal.com/products/mens-tshirts-polos");
        const tshirtdata = await page.evaluate(()=>
        {
            let tshirtdatastore =[];
            let tshirtstatus = document.getElementsByClassName("product-tuple-description")
            for (let i=0;i<tshirtstatus.length;i++){
                let tname=tshirtstatus.item(i);
                let t_shirtdata= tname.getElementsByClassName("product-title")[0].innerText
                let t_cost = tname.getElementsByClassName("lfloat product-price")[0].innerText
                tshirtdatastore[i]={
                    product:t_shirtdata,
                    price:t_cost,
                };
            }
            return tshirtdatastore
        })
        res.send(tshirtdata)

        await browser.close();
    }
    catch (error) {
        console.log(error);
        res.json({
          status: 0,
          message: error,
        });
      }

}
module.exports = { scrapmobile,scraptshirt };
