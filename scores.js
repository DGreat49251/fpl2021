function sum(arr) {
    var s=0;
    for(var i=0; i<arr.length; i++) {
        s = s + arr[i];
    }
    return s;
}
function show(arrsum) {
    var el = document.getElementsByClassName("total");
    for(var i=0; i<10; i++) {
        var sel = el[i];
        sel.innerHTML = arrsum[i];
    }
}
var anik=[0];
var dipak=[0];
var tushar=[0];
var faizan=[0];
var arpan=[0];
var harsh=[0];
var kanti=[0];
var priyanshu=[0];
var divyank=[0];
var deepta=[0];
var anikSum = sum(anik);
var dipakSum = sum(dipak);
var tusharSum = sum(tushar);
var faizanSum = sum(faizan);
var arpanSum = sum(arpan);
var harshSum = sum(harsh);
var kantiSum = sum(kanti);
var priyanshuSum = sum(priyanshu);
var divyankSum = sum(divyank);
var deeptaSum = sum(deepta);
var sumarr = [anikSum, dipakSum, tusharSum, arpanSum, faizanSum, priyanshuSum, divyankSum, harshSum, kantiSum, deeptaSum];
show(sumarr);