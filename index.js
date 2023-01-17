//adds reverse method to the String prototype, reverses a string

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

//adds blank method to the String prototype, detects blank strings
String.prototype.blank = function blank() {
    console.log("This is: " + this);
    return this.match(/\w/)===null;
}

//adds a last method to the Array prototype that returns the value of the last index of an arra
Array.prototype.last = function last() {
    return this.slice(-1);
}

//add palindrome method to the String prototype, detects palindromes
String.prototype.palindrome = function palindrome () {
    let content = this.toLowerCase();
    return Array.from(content).join("")===Array.from(content).reverse().join("");
}


//console.log(palindrome("Racecar"));

//defines a phrase object
function Phrase(content) {
    this.content = content;

    this.processor = function processor(string) {
        return string.toLowerCase();
    }

    //returns a string in all lower case
    this.processedContent = function processedContent() {
        return this.processor(this.content);
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


let phrase = new Phrase("Racecars");
let p = new Phrase("can you hear me now?");
let napoleonsLament = new Phrase("Able was I ere I saw Elba");
//console.log(phrase.content);
//console.log(phrase["content"]);
//console.log(phrase.palindrome());
//console.log(phrase["palindrome"]);
//console.log(p.louder() + p.palindrome());

let frase = new TranslatedPhrase("recognize", "Reconocer");
//frase = new TranslatedPhrase("recognize", "reconocer");

//console.log(frase.palindrome());
//console.log("hey there 3");
console.log("Napoleon's lament " + napoleonsLament.palindrome());
//console.log(phrase.processedContent());
let fish = `                                                   `;
console.log(fish.blank());
const sliceTest = "Racecar".split("").last();
console.log(sliceTest);
//let a = sliceTest.last();
//console.log(a);
//console.log("things".last());
//console.log("Palindrome: " + sliceTest.palindrome());
