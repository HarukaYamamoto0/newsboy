const axios = require("axios");
const { url, username, avatar_url } = process.env;

async function robot(content) {
  const message = {
    username,
    avatar_url,
    embeds: [content.embed]
  };

  await axios.post(url, message);
}

module.exports = robot;
