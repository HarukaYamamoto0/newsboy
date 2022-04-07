const { MessageEmbed } = require("discord.js");

function robot(content) {
  const { article } = content;

  const embed = new MessageEmbed()
    .setTitle(article.title)
    .setURL(article.url)
    .setImage(article.image)
    .setDescription(article.resume)
    .setColor("#3da1d7");

  content.embed = embed;
}

module.exports = robot;
