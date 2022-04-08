const robots = {
  text: require("./robots/text.js"), // get an article in the api
  webhook : require("./robots/webhook.js"), // if the webhook does not exist it creates a
  postman: require("./robots/postman.js")  // send embed using discord api
};

async function start() {
  try {
    const content = {};

    await robots.text(content);
    await robots.webhook(content);
    await robots.postman(content);
    await console.log("The article has been sent successfully!");

    setInterval(start, 86400000);
  } catch (err) {
    console.error(err);
  }
}

start();
