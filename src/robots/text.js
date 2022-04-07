const puppeteer = require("puppeteer");

async function robot(content) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto("https://g1.globo.com/tecnologia/");
  const result = await page.evaluate(() => {
    const getElement = (query) => document.querySelectorAll(query)[0];

    const result = {
      title: getElement(".feed-post-body-title").innerText,
      url: getElement("a.feed-post-link").href,
      resume: getElement(".feed-post-body-resumo").innerText,
      image: getElement(".bstn-fd-picture-image").src,
    };

    return result;
  });
  
  content.article = result;
}

module.exports = robot;
