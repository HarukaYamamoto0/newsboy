const puppeteer = require("puppeteer");

async function robot(content) {
  await getArticle();

  async function getArticle() {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://g1.globo.com/tecnologia/");
    const article = await page.evaluate(() => {
      const getElement = (query) => document.querySelector(query);

      const usefulParts = {
        title: getElement(".feed-post-body-title").innerText,
        url: getElement(".feed-post-link").href,
        image: getElement(".bstn-fd-picture-image").src,
      };

      return usefulParts;
    });

    await page.goto(article.url);
    const articleContent = await page.evaluate(() => {
      const paragraphs = document.querySelectorAll("p.content-text__container");

      const fullArticle = Array.from(paragraphs).reduce(
        (acc, { innerText }) => acc + innerText + "\n\n",
        ""
      );
      return fullArticle;
    });

    article.content = articleContent.slice(0, 1997) + "...";
    content.article = article;
  }
}

module.exports = robot;
