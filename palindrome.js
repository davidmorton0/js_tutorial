// Reverses a string.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function () {
  return !this.match(/\S+/);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

//TranslatedPhrase.prototype = new Phrase();

//let frase = new TranslatedPhrase("recognize", "reconocer");
//console.log(frase.palindrome());
console.log("foobar".blank());        // false
console.log("   foobar".blank());     // false
console.log("foobar   ".blank());     // false
console.log("   foobar   ".blank());  // false
console.log("".blank());              // true
console.log(" ".blank());             // true
console.log("\r".blank());            // true
console.log("\n".blank());            // true
console.log("\t".blank());            // true
console.log("\f".blank());            // true
console.log("\v".blank());            // true
