const { MessageEmbed } = require("discord.js");

function robot(content) {
  const { article } = content;

  const embed = new MessageEmbed()
    .setTitle(article.titulo)
    .setURL(article.link)
    .setImage(article.image)
    .setDescription(article.introducao)
    .setColor("#3da1d7");

  content.embed = embed;
}

module.exports = robot;
