
(function () {

var names = ["Sai", "konda", "Prakash", "Jay", "Joy", "skit", "Nandyal", "AndhraPradesh", "USA", "India"];
for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();
if (firstLetter === 'j') {
    byeSpeaker.sayGoodbye(names[i]);
  } else {
    helloSpeaker.sayHello(names[i]);
  }
}
