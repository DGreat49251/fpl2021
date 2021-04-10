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
        sel.innerText = arrsum[i];
    }
}
function place(arr,q) {
    var el = document.querySelectorAll(q);
    for(var i=0;i<arr.length;i++) {
        var sel = el[i];
        sel.innerText = arr[i];
    }
}
var anik=[5+0+6,0+3+5];
var dipak=[2+0+6,2+3+5];
var tushar=[15+3+7,5+0+6];
var faizan=[-6+0+5,-1+0+4];
var arpan=[10+0+7,0+3+5];
var harsh=[-8+0+5,15+0+7];
var kanti=[0+0+5,-5+0+4];
var priyanshu=[0+3+6,-8+3+4];
var divyank=[-1+0+5,-3+0+4];
var deepta=[-3+0+5,10+3+7];
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
place(anik,'#ad');
place(dipak,'#dg');
place(tushar,'#tj');
place(arpan,'#as');
place(faizan,'#fa');
place(harsh,'#hrt');
place(kanti,'#sb');
place(priyanshu,'#pm');
place(divyank,'#dr');
place(deepta,'#dkd');