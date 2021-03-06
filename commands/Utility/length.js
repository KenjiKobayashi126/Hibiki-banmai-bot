const db = require("quick.db");

module.exports = {
  name: "length",
  category: "utility",
  description: "Độ dài lệnh :/",
  usage: "length <msg>",
  args: true,
  run: async (client, message, args, del, member) => {
    message.delete();
    const usa = args.join(" ");
    if (!usa)
      return message.channel
        .send(`${message.author}, length <msg>`)
        .then(m => m.delete({ timeout: 5000 }).catch(e => {}));
    return message.channel.send(`Chiều dài chuỗi : \`${args.join(" ").length}\``);
  }
};
