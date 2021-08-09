function toCipher(sent) {
  const firstLetter = sent.charAt(0);
  const lastLetter = sent.charAt(sent.length - 1);
  var len = sent.length - 1;
  sent = lastLetter + sent.substr(1, len - 1) + firstLetter;

  return sent;
}

function toUp(sent) {
  const firstLetter = sent.charAt(0);
  const lastLetter = sent.charAt(sent.length - 1);
  var bothLetters = (firstLetter + lastLetter).toUpperCase();

  return bothLetters;
}

function revUp(sent) {
  const firstLetter = sent.charAt(0);
  const lastLetter = sent.charAt(sent.length - 1);
  var bothLettersRev = sent + (lastLetter + firstLetter).toUpperCase();

  return bothLettersRev;
}

function countHalf(sent) {
  const firstLetter = sent.charAt(0);
  const lastLetter = sent.charAt(sent.length - 1);
  var bothLettersRev = (lastLetter + firstLetter).toUpperCase();
  var halfChar = sent.charAt((sent.length - 1) / 2) + sent + bothLettersRev;

  return halfChar;
}

var sent = prompt("Enter a sentence to cipher: ");

alert(toCipher(sent));
alert(toUp(sent));
alert(revUp(sent));
alert(countHalf(sent));

