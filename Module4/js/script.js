(function (window) {

    // The program should say "Hello" to any name except names that start with a "J"
    // or "j", otherwise, the program should say "Good Bye". So, the final output
    // on the console should look like this:
    /*
    Hello Yaakov
    Good Bye John
    Good Bye Jen
    Good Bye Jason
    Hello Paul
    Hello Frank
    Hello Larry
    Hello Paula
    Hello Laura
    Good Bye Jim*/
    
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using the 'speak' method or either helloSpeaker's or byeSpeaker's
    // 'speak' method.
    for (var i in names) {

      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      // Look up these methods on Mozilla Developer Network web site if needed.
      var firstLetter = ((names[i]).charAt(0)).toLowerCase();
    
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.

      if (firstLetter == 'j') {
         window.byeSpeaker.speak(names[i]);
      } else {
         window.helloSpeaker.speak(names[i]);
      }
    }
    })(window);
