exports.generate = generate;
function generate(message) {
  var length = message.length;
  var ret = "";
  ret += "＿";
  for (var i = 0; i < length + 1; i++) {
    ret +="人";
  }
  ret += "＿\n";
  ret += "＞ " + message + " ＜\n";
  ret += "￣";
  for (var j = 0; j < length + 1; j++) {
    j == (length) ?  ret += "Y" : ret += "Y^";
  }
  ret += "￣";
  return ret;
}