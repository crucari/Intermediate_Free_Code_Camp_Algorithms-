function convertHTML(str) {
  // Split by character

  var temp = str.split('');



  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

______________

//converting &, <, >, " to &amp, &It, &qt, &quot, &apos
// 1) Split characters
// 2) hashmap  ->
// 3) join
var hashMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
};

function convertHTML(str) {
    var strArray = str.split('');
    strArray = strArray.map(function(char) {
        if (hashMap[char]) {
            return hashMap[char];
        }
        return char;
    });
    str = strArray.join('');
    return str;
}

convertHTML("Dolce & Gabbana");
_________

var hashMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
};

function convertHTML(str) {
    var strArray = str.split('');
    strArray = strArray.map(function(char) {
        return hashMap[char] ? hashMap[char] : char;
    });
    str = strArray.join('');
    return str;
}

convertHTML("Dolce & Gabbana");

______________

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};
function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

convertHTML("Dolce & Gabbana");