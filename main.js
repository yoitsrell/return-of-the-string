/*******************
 * YOUR CODE HERE! *
 *******************/
function capitalize(one) {
  return one.toUpperCase()
}

function exclaim (two) {
  return two + '!'
}

function firstCharacter (three) {
  return three[0]
}

function lastCharacter (four) {
  return four[four.length-1]
}

function oneCharacter(five){
  return five[1]
}

function twoCharacters(six, i2, i3) {
  return six[i2] +six[i3]
}

function yeller(seven) {
  return seven.toUpperCase() + '!!!'
}

function initials(eight) {
  return eight[0] + '.' + eight[0] + '.'
}
/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  yeller,
  initials,
};