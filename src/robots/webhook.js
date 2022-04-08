const { WebhookClient } = require("discord.js");
const { webhookUrl } = process.env;

async function robot(content) {
  if (!content.webhook) {
    const webhookClient = new WebhookClient({ url: webhookUrl });
    content.webhook = webhookClient;
    console.log("The webhook was created.");
  }
}

module.exports = robot;
