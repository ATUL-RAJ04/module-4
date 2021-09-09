/*
Solution of assignment 4:
Expected output:
Hello Atul
Good Bye Raj
Good Bye Priyam
Good Bye Chhinu
Hello Gaurav
Hello Ravan
Hello Nikita
Hello Sakshi
Hello Nistha
Good Bye Rebati
*/

(function() {
    var names = ["Atul", "Raj", "Priyam", "Chhinu", "Gaurav", "Ravan", "Nikita", "Sakshi", "Nistha", "Rebati"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();