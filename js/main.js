'use strict';

//   #10 要素のコピー､削除をしてみよう

{
    // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);//false
    // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);//true

    // document.querySelectorAll('input[type="checkbox"]')[0].checked = true; //macOSの方にもチェック

    // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);//true
    // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);//false

    // document.querySelectorAll('input[type="radio"]')[1].checked = true;

    console.log(document.querySelectorAll('select > option')[0].selected);
    console.log(document.querySelectorAll('select > option')[1].selected);
    console.log(document.querySelectorAll('select > option')[2].selected);

    document.querySelectorAll('select > option')[2].selected = true; //item2が選択される

}
