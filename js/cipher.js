function toCipher(sent) {
  const firstLetter = sent.charAt(0);
  alert(firstLetter);
  const lastLetter = sent.charAt(sent.length - 1);
  alert(lastLetter);
  var len = sent.length - 1;
  sent = lastLetter + sent.substr(1, len - 1) + firstLetter;
  
  // alert(firstLetter);
  // alert(lastLetter);

  alert(sent);
  
  return sent;
}

var sent = prompt("Enter a sent to cipher: ");

alert(toCipher(sent));

