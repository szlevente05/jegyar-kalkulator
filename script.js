let checkedBtn1;
let checkedBtn2;


var btn1 = document.getElementsByName('radButton1');
var btn2 = document.getElementsByName('radButton2');

function myFunc() {
    for (let i = 0; i < btn1.length; i++) {
        if (btn1[i].checked) {
            checkedBtn1 = btn1[i].value;
            break;
        }
    }

    for (let i = 0; i < btn2.length; i++) {
        if (btn2[i].checked) {
            checkedBtn2 = btn2[i].value;
            break;
        }
    }

    if (checkedBtn1 == 0) {
        alert(`A jegy ára ${checkedBtn2} forint`);
    } else {
        alert(`A gyerekjegy ára ${checkedBtn2 - (checkedBtn2 * 0.20)} forint`)
    }
}