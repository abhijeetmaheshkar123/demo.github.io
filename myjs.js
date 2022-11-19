function myfunc() {
    // for First Name
    let text = document.myform.fname.value;
    let text1 = text.trim().split(/\s+/);
    let index1 = text1[0].length;
    let index2 = text1[1].length;
    let index3=(index1 && index2)
    let letters = /^[a-zA-Z\s]+$/;
    var pattern = /[a-zA-Z]+.\s/;
    var result = text.match(pattern);
    localStorage.setItem("firstname", result);
    var abhi = letters.test(text);
    

    if ((abhi!=true) || (text1.length >= 3) || (index3 < 4)) {

        return false;
    }
     

    // for email
    var a = document.myform.email.value;
    localStorage.setItem("emailvalue", a);

    // for pan number pattern
    let pan = document.myform.pan.value;
    var reg = /[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/;
    let rege = pan.match(reg);
    if (pan != rege) {
        return false;
    }
    // enter only numbers in loan amount
    let loan = document.myform.loan.value;
    if (isNaN(loan)) {
        return false
    }
}
// for converting number into word in loan ammount 
let c = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
let d = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convert() {
    let value = document.getElementById("a4").value;

    if ((value = value.toString()).length > 9) return 'overflow';
    n = ('000000000' + value).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (c[Number(n[1])] || d[n[1][0]] + ' ' + c[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (c[Number(n[2])] || d[n[2][0]] + ' ' + c[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (c[Number(n[3])] || d[n[3][0]] + ' ' + c[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (c[Number(n[4])] || d[n[4][0]] + ' ' + c[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (c[Number(n[5])] || d[n[5][0]] + ' ' + c[n[5][1]]) + 'Rs' : '';

    document.getElementById("bb").innerHTML = str;
}


