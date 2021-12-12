const axios = require("axios");
const { url, username, avatar_url } = process.env;

async function robot(content) {
  const message = {
    username,
    avatar_url,
    embeds: [content.embed]
  };

  await axios({
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: message
  });
}

module.exports = robot;
