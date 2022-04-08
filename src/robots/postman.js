const { username, avatarURL, webhookUrl } = process.env;

async function robot(content) {
  const { webhook } = content;

  await webhook.send({
    content: content.article.content,
    username,
    avatarURL,
    files: [
      {
        attachment: content.article.image,
        name: "image.png",
      },
    ],
  });
}

module.exports = robot;
