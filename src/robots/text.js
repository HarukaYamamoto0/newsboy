const NewsAPI = require("newsapi");
const { apiKey } = process.env;

async function robot(content) {
  await getArticle();
  createLink();

  async function getArticle() {
    const authenticatedInstance = new NewsAPI(apiKey);
    const apiResponse = await authenticatedInstance.v2.topHeadlines({
      category: "technology",
      pageSize: 1,
      language: "pt",
      country: "pt"
    });

    content.article = apiResponse.articles[0];
  }

  function createLink() {
    const { article: { content: text } } = content;
    const chars = text.substr(0, 195);
    const link = `[continuação](${content.article.url})`;
    content.article.content = chars + "..." + link;
  }
}

module.exports = robot;
