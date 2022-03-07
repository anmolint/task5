const puppeteer = require('puppeteer');
const scrapmobile = async (req,res)=>{
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://www.flipkart.com/mobiles/pr?sid=tyy,4io&q=mobiles&otracker=categorytree");
        await page.screenshot({'path': 'flipkart_js.png'})
        let mobiledata = await page.evaluate()
        await browser.close();
    }
    catch(error){
        console.log(error);
    res.json({
      status: 0,
      message: error,
    });
    }}
module.exports ={scrapmobile}