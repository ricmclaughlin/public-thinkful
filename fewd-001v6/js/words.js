function mostFrequentWord(words) {
  'use strict';
  // your code here
  // `words` is an array of strings.
  var wordFrequency = {};
  var possibleKey = '';

  // this function finds the most common word AFTER
  // the wordFrequency object has been created...
  function mostCommonWord() {
    //set initial most common word as the first key
    var mostCommon = Object.keys(wordFrequency)[0];;
    // loop through keys; replace with a higher frequency word 
    //if it appears LATER in the alpha sorted list...
    for (var key in wordFrequency) {
      if (wordFrequency[key] > wordFrequency[mostCommon]) {
        mostCommon = key;
      }
    }
    return mostCommon;    
  }
  
  // this function builds the wordFrequency Object
  // and gets called by forEach
  // this is called a higher order function!
  function incrementWord(element, index, array) {
    // this commented line cleans the element up a bit...
    // because all the odd stuff in the comparison isn't clean 
    // but makes NO diffence in the answer 
    // possibleKey = element.replace(/[^\x20-\x7E]+/g, '').trim();
    possibleKey = element;
    
    // uncomment to see the "uncleaned" possibleKey
    //console.log(possibleKey);

    if (wordFrequency.hasOwnProperty(possibleKey)) {
      // key exists increment element
      wordFrequency[possibleKey]++;
    } else {
      // key does not exist; add it
      wordFrequency[possibleKey] = 1;
    }
  }
  
  // now call incrementWord for each word in the words array
  words.forEach(incrementWord);
  
  // after the wordFrequency object is built
  // figure out which word is the most common and return it
  return mostCommonWord();
}

// `getTokens` returns an alphabetically sorted list of words
function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  // this is the old regular expression from a couple of weeks ago...
  //return rawString.toLowerCase().split(/[ ,!.";:-?]+/).filter(Boolean).sort();
  
  // this is the new regex that appears in the jsbin now... 
  // it does not matter which one you use... does not affect the answer
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

(function testMostFrequentWord() {
 var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';
  
 var expected = 'major';
 var actual = mostFrequentWord(getTokens(spaceOddityText));
 if (expected === actual) {
   console.log('SUCCESS: `mostFrequentWord` is working');
 }
 else {
   console.log('FAILURE: `mostFrequentWord` is not working');
 }
})();