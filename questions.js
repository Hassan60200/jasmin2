var languagesArrayCreation = function () {
    var languages=["Html","CSS","Java","PHP"]
  return languages;
}

var numbersArrayCreation = function () {
    var numbers=[0,1,2,3,4,5];
    return numbers;
}

var ElementReplacement = function (languages) {

   languages.splice(2, 1, "Javascript");
   return languages
}

var AddElementToLanguagesArray = function (languages) {

   languages.push("Ruby", "Python");
   return languages
}

var AddElementToNumbersArray = function (numbers) {

    numbers.splice(0, 0, -2, -1);
  return numbers
}

var deleteArrayFirstElement = function (languages) {
    languages.splice(0,1);
  return languages
}

var deleteArrayLastElement = function (languages) {
    languages.splice(4,1);
  return languages
}

var stringToArray = function (socialMediaInString) {
    var socialMedia =socialMediaInString.split(',');
  return socialMedia
}
var arrayToString = function (languages) {
    var languages= languages.toString();
  return languages
}

var arraySort = function (socialMedia) {
    var socialMedia =socialMedia.sort();
  return socialMedia
}

var arrayInvert = function (languages){
    var languages =languages.reverse();
  return languages
}
