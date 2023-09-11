const en = require("./english.json");
const bn = require("./bangla.json");

export default function GetTextContent(ln: String) {
  if (ln === "bn") {
    return bn;
  } else {
    return en;
  }
}
