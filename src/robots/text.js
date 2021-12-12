const axios = require("axios");

async function robot(content) {
  await getContent();
  await createContinuation();
  await createLink();

  async function getContent() {
    const url =
      "http://servicodados.ibge.gov.br/api/v3/noticias/" +
      "?busca=tecnologia" +
      "&introsize=2000";
    const { data } = await axios.get(url);
    const article = data.items[0];
    content.article = article;
  }

  function createContinuation() {
    if (content.article.introducao.length > 539) {
      const { article: { introducao: text } } = content;
      const chars = text.substr(0, 539);
      const link = `[continue lendo](${content.article.link})`;
      content.article.introducao = chars + "..." + link;
    }
  }

  function createLink() {
    const { article: { imagens } } = content;

    const { image_intro } = JSON.parse(imagens);
    const link = image_intro.replace("\/", "/");
    content.article.image = "http://agenciadenoticias.ibge.gov.br/" + link;
  }
}

module.exports = robot;
