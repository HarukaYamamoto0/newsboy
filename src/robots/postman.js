const axios = require("axios");
const { webhookUrl, username, avatar_url } = process.env;

async function robot(content) {
  const message = {
    username,
    avatar_url,
    embeds: [content.embed]
  };

  await axios.post(webhookUrl, message);
}

module.exports = robot;
