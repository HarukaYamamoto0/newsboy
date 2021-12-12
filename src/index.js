const robots = {
  text: require("./robots/text.js"), // get an article in the api
  embed: require("./robots/embed.js"), // generates an embed from the article
  postman: require("./robots/postman.js")  // send embed using discord api
};

async function start() {
  try {
    const content = {};

    await robots.text(content);
    await robots.embed(content);
    await robots.postman(content);
    await console.log("successfully sent embed");

    setInterval(start, 86400000);
  } catch (err) {
    console.error(err);
  }
}

start();
