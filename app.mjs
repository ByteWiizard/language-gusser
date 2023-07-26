import { franc, francAll } from 'franc'
import lang from 'langs'



document.addEventListener('DOMContentLoaded', function () {

    const detect = document.getElementById('Detect');
    const sentence = document.getElementById('to_detect');
    const overlay = document.querySelector('#overlay');
    const display = document.querySelector('#display');
    const backContent = document.querySelector('#container');
    const textDisplay = document.querySelector('#display #text-desc')
    const LanguageDisplay = document.querySelector('#display #lang-desc')
    const close = document.querySelector('#cross');


    detect.addEventListener('click', function () {


        if (sentence.value === '') {
            alert('Please Enter Some Text to Detect');
        }
        else {

            const sent = sentence.value;
            const langCode = franc(sent);

            if (langCode === 'und') {
                alert(`Can't Detect Language Please Be More Descriptive`);
            } else {

                var language;
                if(langCode === 'zyb'){
                    LanguageDisplay.innerText = "Yongbei Zhuang"
                }else{
                    language = lang.where("3", langCode);
                }
                

                display.style.zIndex = '1';
                display.style.top = '50%';
                backContent.style.zIndex = '-1';
                overlay.style.opacity = 0.5;
                textDisplay.innerText = sentence.value;

                if(language.name != undefined){
                    LanguageDisplay.innerText = language.name;
                }
                
                close.addEventListener('click',function(){
                    display.style.zIndex = '-1';
                    display.style.top = '-500%';
                    backContent.style.zIndex = '1';
                    overlay.style.opacity = 0;
                    textDisplay.innerText = ' ';
                })


            }
        }


    })
})



