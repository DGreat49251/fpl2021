function sum(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return s;
}
function show(arrsum, k) {
    var el = document.getElementsByClassName("total");
    for (var i = 0; i < 10; i++) {
        var sel = el[i + k];
        sel.innerText = arrsum[i];
    }
}
function place(arr, q, k) {
    var el = document.querySelectorAll(q);
    for (var i = 0; i < arr.length; i++) {
        var sel = el[i + k];
        sel.innerText = arr[i];
    }
}
function qual(q) {
    var el = document.querySelectorAll(q);
    for (var i=0;i<el.length;i++) {
        el[i].setAttribute('id', 'qualified');
    }
}
var anik = [5 + 0 + 6, 0 + 3 + 5, 10 + 0 + 7, 5 + 0 + 8, 10 + 0 + 8, 5 + 0 + 7, 0 + 0 + 5, 5 + 3 + 4, -5 + 3 + 5, 2 + 3 + 6, 0 + 0 + 6, 5 + 0 + 6, 5 + 0 + 5, 10 + 0 + 5, -5 + 0 + 6, 10 + 3 + 7, 0 + 0 + 5, 0 + 0 + 5, -5 + 0 + 3, 5 + 0 + 6, -5 + 3 + 4, 0, -20, -20, 0, 0, 0, 0];
var dipak = [2 + 0 + 6, 2 + 3 + 5, -3 + 3 + 5, 15 + 0 + 9, 0 + 3 + 7, 0 + 3 + 6, 5 + 0 + 6, -3 + 0 + 4, 0 + 3 + 5, 15 + 0 + 7, -3 + 0 + 5, 5 + 0 + 6, 0 + 0 + 4, -3 + 0 + 4, -1 + 3 + 6, 0 + 0 + 6, -1 + 0 + 5, 0 + 0 + 4, -3 + 0 + 4, -3 + 0 + 5, -1 + 0 + 4, 2 + 0 + 5, 0 + 0 + 5, 11, 4, 22, 8, 15];
var tushar = [15 + 3 + 7, 5 + 0 + 6, -8 + 3 + 5, 10 + 0 + 8, 0 + 3 + 7, 10 + 3 + 7, -1 + 0 + 4, 2 + 0 + 4, 10 + 3 + 6, -3 + 3 + 6, 2 + 3 + 6, 10 + 0 + 7, -2 + 0 + 4, 0 + 0 + 5, 2 + 0 + 7, 5 + 3 + 6, 15 + 0 + 6, 15 + 0 + 5, 0 + 0 + 5, 0 + 0 + 6, -3 + 0 + 4, 5 + 5 + 3, -3 + 3 + 5, 4, 8, 11, 20, 12];
var faizan = [-6 + 0 + 5, -1 + 0 + 4, 15 + 3 + 7, -5 + 3 + 6, 5 + 3 + 8, 0 + 0 + 6, 2 + 0 + 6, -1 + 3 + 4, 5 + 3 + 6, 0 + 0 + 6, -1 + 0 + 5, -3 + 3 + 6, 2 + 0 + 4, 2 + 0 + 5, 10 + 0 + 7, -3 + 3 + 4, 5 + 0 + 5, 5 + 0 + 5, 2 + 0 + 6, 15 + 0 + 6, 2 + 3 + 4, 8, 15 + 3 + 6, 6, 2, 8, 25, 7];
var arpan = [10 + 0 + 7, 0 + 3 + 5, -1 + 0 + 5, -3 + 0 + 7, -1 + 3 + 6, -3 + 0 + 4, -5 + 0 + 3, -5 + 3 + 4, 2 + 3 + 6, 10 + 3 + 7, 15 + 3 + 7, 15 + 0 + 7, 0 + 0 + 4, -1 + 3 + 4, -8 + 0 + 6, -5 + 0 + 3, -3 + 0 + 5, -1 + 3 + 4, 0, -8 + 0 + 4, 10 + 3 + 4, 10 + 3 + 5, 2 + 3 + 5, 19, 22, 1, 8, 7];
var harsh = [-8 + 0 + 5, 15 + 0 + 7, 5 + 0 + 6, -8 + 0 + 6, -5 + 0 + 5, 15 + 3 + 7, 10 + 0 + 6, 0 + 0 + 4, -8 + 3 + 5, 0 + 3 + 5, -5 + 3 + 5, -8 + 0 + 4, -5 + 0 + 4, 0, 15 + 0 + 8, -8 + 0 + 3, 0, -5 + 0 + 3, 0 + 3 + 5, 10 + 0 + 6, 15 + 0 + 5, -1 + 8, 0 + 3 + 5, 11, 14, 8, 6,27];
var kanti = [0 + 0 + 5, -5 + 0 + 4, -5 + 0 + 5, 0 + 3 + 8, 15 + 0 + 8, -1 + 0 + 5, 0 + 3 + 5, 10 + 3 + 5, 15 + 3 + 6, -1 + 0 + 6, 10 + 0 + 7, -1 + 3 + 6, 15 + 0 + 5, 15 + 3 + 5, -3 + 3 + 6, -1 + 0 + 5, 10 + 0 + 6, 10 + 0 + 5, 15 + 3 + 7, -1 + 0 + 5, 5 + 3 + 4, 4, 19, 14, 2, 8, 4, 7];
var priyanshu = [0 + 3 + 6, -8 + 3 + 4, 0 + 0 + 6, 2 + 0 + 8, 0, -10, -10, -8 + 3 + 3, 0 + 3 + 5, 5 + 0 + 6, 0 + 0 + 6, 0 + 3 + 6, -1 + 0 + 4, 5 + 3 + 5, 0 + 3 + 6, 0 + 3 + 6, 2 + 0 + 5, 0, -1 + 0 + 4, 0 + 0 + 5, -8 + 0 + 4, 0, -13, 10, 8, 0, 0, -13];
var divyank = [-1 + 0 + 5, -3 + 0 + 4, 2 + 0 + 6, -1 + 0 + 7, -3 + 3 + 6, 0, 15 + 0 + 6, 15 + 3 + 6, -1 + 0 + 5, 0, -24, -5 + 0 + 5, 0, -24, 0 + 3 + 6, 15 + 3 + 7, -5 + 3 + 4, -3 + 3 + 4, 15 + 0 + 7, 2 + 0 + 6, 0 + 3 + 4, 15 + 0 + 6, 10 + 0 + 6, -1, 19, 7, 0, -24];
var deepta = [-3 + 0 + 5, 10 + 3 + 7, 0 + 0 + 6, 0 + 3 + 8, 2 + 3 + 7, 2 + 3 + 6, -3 + 3 + 4, 0 + 0 + 4, -3 + 3 + 5, -5 + 0 + 5, 5 + 3 + 7, 0 + 3 + 6, 10 + 0 + 5, 0 + 0 + 5, 5 + 0 + 7, 2 + 0 + 6, 0 + 0 + 5, 2 + 0 + 5, 5 + 0 + 6, -5 + 0 + 5, 0 + 0 + 4, 8, -1 + 5, 21, 5, 17, 12,21];
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
show(sumarr, 0);
place(anik, '#ad', 0);
place(dipak, '#dg', 0);
place(tushar, '#tj', 0);
place(arpan, '#as', 0);
place(faizan, '#fa', 0);
place(harsh, '#hrt', 0);
place(kanti, '#sb', 0);
place(priyanshu, '#pm', 0);
place(divyank, '#dr', 0);
place(deepta, '#dkd', 0);
var anik2 = [20, 9, 15, 11, 10, 3, 13, 24, 14]
var dipak2 = [25, 12, 20, 22, 18, 6, 10, 19, 9]
var tushar2 = [11, 3, 5, 10, 7, 14, 4, 14, 20]
var arpan2 = [7, 2, 0, 6, 8, 20, 16, 10, 9]
var kanti2 = [0, 22, 6, 16, 24, 6, 24, 8, 7]
var divyank2 = []
var deepta2 = [0, 17, 12, 10, 13, 9, 5, 0, -17]
var harsh2 =[]
var priyanshu2 = []
var faizan2 =[]
var anikSum2 = sum(anik2);
var dipakSum2 = sum(dipak2);
var tusharSum2 = sum(tushar2);
var arpanSum2 = sum(arpan2);
var faizanSum2 = sum(faizan2);
var priyanshuSum2 = sum(priyanshu2);
var divyankSum2 = sum(divyank2);
var harshSum2 = sum(harsh2);
var kantiSum2 = sum(kanti2);
var divyankSum2 = sum(divyank2);
var deeptaSum2 = sum(deepta2);
var sumarr2 = [anikSum2, dipakSum2, tusharSum2, arpanSum2, "OPTED OUT", "DISQ.", "DISQ.", "DISQ.", kantiSum2, deeptaSum2];
show(sumarr2, 10);
place(anik2, '#ad', 28);
place(dipak2, '#dg', 28);
place(tushar2, '#tj', 28);
place(arpan2, '#as', 28);
place(faizan2, '#fa', 28);
place(harsh2, '#hrt', 28);
place(kanti2, '#sb', 28);
place(priyanshu2, '#pm', 28);
place(divyank2, '#dr', 28);
place(deepta2, '#dkd', 28);
qual('#tj')
qual('#sb')