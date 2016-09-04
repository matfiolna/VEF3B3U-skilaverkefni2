//1. H�r er d�mi um �function decleration� og kall � falli�. Afhverju virkar eftirfarandi k��i �
//JavaScript, �tsk�r�u?
� JS �� getur a� kalla � falli� sem er function declaration hvar sem er � k��ann, l�ka fyrir framan falli� sj�lf, vegna 
function declaration hla�a ��ur en k��inn er keyr�.



//2. � hva�a r�� er k��inn keyr�ur � raun eftir a� ���andinn (e. interpreter) er b�inn a� f� hann til
//s�n? Hva� birtir alert(), afhverju? 
alert skilar 8, vegna �ess annar falli� bar � foo fallinu er teki�.

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



//3. � hva�a r�� er k��inn keyr�ur � raun eftir a� ���andinn (e. interpreter) er b�inn a� f� hann til
//s�n? Hva� birtir alert(), afhverju? 
alert skilar 3, vegna �ess si�asti � r�� til a� keyri � k��inn er return bar(), og hann er eftir fyrstu falli� bar.


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




//4. H�gt er b�a til fall m.a. me� 'function expressions' e�a 'function declarations'. Hvort �tti ma�ur
//a� nota, afhverju?

Function declarations  hla�a ��ur en k��inn er keyr�ur.

Function expressions  hla�a a�eins �egar interpreter  n�r �essi l�na af k��a.




//5. Hva� gerist �egar �g gleymi a� skilgreina breytu me� var? �tsk�r�u hva� gerist
Age = �30�;
Console.log(age);

�� �arft ekki a� nota skilagreina breytu. Console.log skilar Age breytu.





//6. �tsk�r�u hva� eftirfarandi k��i gerir, hva� gera svigarnir?
�etta er IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE). �au eru keyr� �egar sem
t�lkur kemur yfir ��.
 
 
 
 
//7. Afhverju virkar eftirfarandi k��ab�tur me� �skilgreindu breytunni, �tsk�r�u?
�etta er OR operator:
Skilar gildi 1 ef �a� er h�gt; annars, skilar gildi 2, og vegna �ess �a� er true gildi � properties �� hann er ekki a� tj�kka hinn gildi.




//8. �tsk�r�u hvers vegna �ttaki� er �hello world� 
�etta 

var originalFunction = function () {
 console.log('hello world');
}
var copiedFunction = originalFunction; // Hann er a� kallar �pp fyrsta originalFunction falli� fyrir copiedFunction
var originalFunction = function () {
 console.log('goodbye world');
}
copiedFunction();

�ttaki� er "Hello world" vegna �ess breyta copiedFunction er keyr� eftir fyrsta originalFunction falli� og �a� er a� �v� Function expressions.




//9. �tsk�r�u �ttak:
function power(base, exponent) {
 if (exponent === undefined)
 exponent = 2;
 var result = 1;
 for (var count = 0; count < exponent; count++)
 result *= base;
 return result;
}
console.log(power(4)); // vegna �ess �a� er "if" � falli� og � JS �� �arft ekki a� sk�ra alla gildi � falls properites 
console.log(power(4,3,2)); // Gildi� 2 gerir ekki neitt og � JS �� m�tt setja meira gildi en er �etta � falls properties.




//10. Hva� er call stack og hva� er heap?

�etta er memory management; call stack er �a� "r��" � hverju k��ann er keyr�ur.



//11. Hva� er callback, komdu me� l�ti� d�mi og �tsk�r�u.
callback er �egar forrit er ekki a� kalla falli� strax heldur bi�ur fyrir r�tti timi a� gera �etta (venjulega �egar alla annar fallar sem eru ekki callbacks eru n� �egar keyr�u) 


function rdy() { //fall sem s�na eitthva� text
    alert('Hello from callback!');
} 
 
function run(callback) { //Eins og vi� vitum ekki hva� �a� er � raun �essi breytu, vi� t�kkum hva�a tegund �essi breyta er, og �egar vi� vitum a� �etta er ekki fall, �� vi� setum false gildi
    if (typeof callback !== 'function') {
         callback = false;
    }
 
    if (callback) {
         callback();
    }
}
 
run(rdy); //kalla � fall 

//12. Hva� ���a eftirfarandi hugt�k � JavaScript?

a. Non blocking - ���ir a� �a� er a� �egar �� gerir k��inn virkar, �a� mun skila strax �n �ess a� setja �r�� til a� bi�a. 
b. Single thread -  ���ir a� a�eins eina a�ger� er h�gt a� framkv�ma � ein.
c. asynchronous - k��inn er keyr�ur ekki � sama r��, fr� toppi til botns. 


