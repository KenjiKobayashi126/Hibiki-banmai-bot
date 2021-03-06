module.exports = {
  name: "setlan",
  category: "settings",
  permissions: "ADMINISTRATOR",
  usage: "setlang <lang>",
  description: "Đặt ngôn ngữ cho chat-bot",
  botPermission: [
    "VIEW_CHANNEL",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD"
  ],
  authorPermission: [
    "VIEW_CHANNEL",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD"
  ],
  run: (client, message, args) => {
    const langs = [
      "afrikaans",
      "albanian",
      "amharic",
      "arabic",
      "armenian",
      "azerbaijani",
      "bangla",
      "basque",
      "belarusian",
      "bengali",
      "bosnian",
      "bulgarian",
      "burmese",
      "catalan",
      "cebuano",
      "chichewa",
      "corsican",
      "croatian",
      "czech",
      "danish",
      "dutch",
      "english",
      "esperanto",
      "estonian",
      "filipino",
      "finnish",
      "french",
      "frisian",
      "galician",
      "georgian",
      "german",
      "greek",
      "gujarati",
      "haitian creole",
      "hausa",
      "hawaiian",
      "hebrew",
      "hindi",
      "hmong",
      "hungarian",
      "icelandic",
      "igbo",
      "indonesian",
      "irish",
      "italian",
      "japanese",
      "javanese",
      "kannada",
      "kazakh",
      "khmer",
      "korean",
      "kurdish (kurmanji)",
      "kyrgyz",
      "lao",
      "latin",
      "latvian",
      "lithuanian",
      "luxembourgish",
      "macedonian",
      "malagasy",
      "malay",
      "malayalam",
      "maltese",
      "maori",
      "marathi",
      "mongolian",
      "myanmar (burmese)",
      "nepali",
      "norwegian",
      "nyanja",
      "pashto",
      "persian",
      "polish",
      "portugese",
      "punjabi",
      "romanian",
      "russian",
      "samoan",
      "scottish gaelic",
      "serbian",
      "sesotho",
      "shona",
      "sindhi",
      "sinhala",
      "slovak",
      "slovenian",
      "somali",
      "spanish",
      "sundanese",
      "swahili",
      "swedish",
      "tajik",
      "tamil",
      "telugu",
      "thai",
      "turkish",
      "ukrainian",
      "urdu",
      "uzbek",
      "vietnamese",
      "welsh",
      "xhosa",
      "yiddish",
      "yoruba",
      "zulu"
    ];
    if (!args[0])
      return client.send(
        `Hãy chọn ngôn ngữ mà bạn muốn chat-bot trả lời bạn! \n${langs
          .map((l, i) => `#${i + 1} - ${l}`)
          .join("\n")}`,
        message
      );
    if (!langs.includes(args[0].toLowerCase())) {
      client.send("Lỗi: Ngôn ngữ không hợp lệ", message);
    }
    client.data.set(`LANG_${message.guild.id}`, args[0].toLowerCase());
    return client.send(
      `Từ bây giờ, ngôn ngữ của chat-bot sẽ là ${args[0].toLowerCase()}`,
      message
    );
  }
};
