module.exports = Phrase;

//adds reverse method to the String prototype, reverses a string

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}


//defines a phrase object
function Phrase(content) {
    this.content = content;

    //returns a string in all lower case
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    //returns the letters in the content
    this.letters = function letters () {
        const lettersRegEx = /[a-z]/ig;
        return (this.content.match(lettersRegEx) || ["n", "o", "t",]).join("");
    }
    //returns "true" for a palindrome, or "false"
    this.palindrome = function palindrome() {
        return this.processedContent()===this.processedContent().reverse();
    }

    //returns content in all caps, LOUDER
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}

//defines a translated phrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();



/*let phrase = new Phrase("Racecar");
let p = new Phrase("can you hear me now?");
let napoleonsLament = new Phrase("Able was I ere I saw Elba");
//console.log(phrase.content);
//console.log(phrase["content"]);
console.log(phrase.palindrome());
//console.log(phrase["palindrome"]);
console.log(p.louder() + p.palindrome());

//let frase = new TranslatedPhrase("recognize", "Reconocer");
//frase = new TranslatedPhrase("recognize", "reconocer");

//console.log(frase.palindrome());

console.log("Napoleon's lament " + napoleonsLament.palindrome());

*/
