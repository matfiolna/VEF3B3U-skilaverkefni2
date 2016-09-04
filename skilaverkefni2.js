//1. Hér er dæmi um “function decleration” og kall á fallið. Afhverju virkar eftirfarandi kóði í
//JavaScript, útskýrðu?
Í JS þú getur að kalla á fallið sem er function declaration hvar sem er í kóðann, líka fyrir framan fallið sjálf, vegna 
function declaration hlaða áður en kóðinn er keyrð.



//2. Í hvaða röð er kóðinn keyrður í raun eftir að þýðandinn (e. interpreter) er búinn að fá hann til
//sín? Hvað birtir alert(), afhverju? 
alert skilar 8, vegna þess annar fallið bar í foo fallinu er tekið.

function foo(){
    //1
    function bar() {
        return 3;
    }
    //2
    function bar() {
        return 8;
    }
    //3
    return bar(); // return 8:
	
alert(foo());



//3. Í hvaða röð er kóðinn keyrður í raun eftir að þýðandinn (e. interpreter) er búinn að fá hann til
//sín? Hvað birtir alert(), afhverju? 
alert skilar 3, vegna þess siðasti í röð til að keyri í kóðinn er return bar(), og hann er eftir fyrstu fallið bar.


function foo(){
//1
 var bar = function() {
 return 3;
 };
 //3 - return
 return bar();
 //2
 var bar = function() {
 return 8;
 };
}
alert(foo());




//4. Hægt er búa til fall m.a. með 'function expressions' eða 'function declarations'. Hvort ætti maður
//að nota, afhverju?

Function declarations  hlaða áður en kóðinn er keyrður.

Function expressions  hlaða aðeins þegar interpreter  nær þessi lína af kóða.




//5. Hvað gerist þegar ég gleymi að skilgreina breytu með var? Útskýrðu hvað gerist
Age = “30”;
Console.log(age);

þú þarft ekki að nota skilagreina breytu. Console.log skilar Age breytu.





//6. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?
þetta er IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE). þau eru keyrð þegar sem
túlkur kemur yfir þá.
 
 
 
 
//7. Afhverju virkar eftirfarandi kóðabútur með óskilgreindu breytunni, útskýrðu?
Þetta er OR operator:
Skilar gildi 1 ef það er hægt; annars, skilar gildi 2, og vegna þess það er true gildi í properties þá hann er ekki að tjékka hinn gildi.




//8. Útskýrðu hvers vegna úttakið er “hello world” 
þetta 

var originalFunction = function () {
 console.log('hello world');
}
var copiedFunction = originalFunction; // Hann er að kallar úpp fyrsta originalFunction fallið fyrir copiedFunction
var originalFunction = function () {
 console.log('goodbye world');
}
copiedFunction();

Úttakið er "Hello world" vegna þess breyta copiedFunction er keyrð eftir fyrsta originalFunction fallið og það er að því Function expressions.




//9. Útskýrðu úttak:
function power(base, exponent) {
 if (exponent === undefined)
 exponent = 2;
 var result = 1;
 for (var count = 0; count < exponent; count++)
 result *= base;
 return result;
}
console.log(power(4)); // vegna þess það er "if" í fallið og í JS þú þarft ekki að skýra alla gildi í falls properites 
console.log(power(4,3,2)); // Gildið 2 gerir ekki neitt og í JS þú mátt setja meira gildi en er þetta í falls properties.




//10. Hvað er call stack og hvað er heap?

þetta er memory management; call stack er það "röð" í hverju kóðann er keyrður.



//11. Hvað er callback, komdu með lítið dæmi og útskýrðu.
callback er þegar forrit er ekki að kalla fallið strax heldur biður fyrir rétti timi að gera þetta (venjulega þegar alla annar fallar sem eru ekki callbacks eru nú þegar keyrðu) 


function rdy() { //fall sem sýna eitthvað text
    alert('Hello from callback!');
} 
 
function run(callback) { //Eins og við vitum ekki hvað það er í raun þessi breytu, við tékkum hvaða tegund þessi breyta er, og þegar við vitum að þetta er ekki fall, þá við setum false gildi
    if (typeof callback !== 'function') {
         callback = false;
    }
 
    if (callback) {
         callback();
    }
}
 
run(rdy); //kalla á fall 

//12. Hvað þýða eftirfarandi hugtök í JavaScript?

a. Non blocking - þýðir að það er að þegar þú gerir kóðinn virkar, það mun skila strax án þess að setja þráð til að biða. 
b. Single thread -  þýðir að aðeins eina aðgerð er hægt að framkvæma í ein.
c. asynchronous - kóðinn er keyrður ekki í sama röð, frá toppi til botns. 


