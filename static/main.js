let wid = window.outerWidth
let hei = window.outerHeight

for (let i=0; i<8; i++) {
    el = document.getElementById(`img_${i}`)
    el.style.width = `${wid*0.18}px`
    el.style.height = `${hei*0.3}px`
    el.style.backgroundImage = `url(/C:/for_lessons/btec/img/ser_${i}_1.jpg)`
}


function scrollServices() {
    let el1 = document.getElementById('services');
    el1.scrollIntoView({behavior: "smooth"});
}

function scrollPackages() {
    let el1 = document.getElementById('packages');
    el1.scrollIntoView({behavior: "smooth"});
}

function scrollForm() {
    let el1 = document.getElementById('form');
    el1.scrollIntoView({behavior: "smooth"});
}




let header = document.getElementById('header');
header.style.height=`${hei*0.08}px`


// let none = document.getElementById('none');
// none.style.height=`${hei*0.08}px`



function blockAppear() {
    el = document.getElementById('others')
    display = el.style.display
    if (display=='none') {
        el.style.display = 'flex'
    } else {
        el.style.display = 'none'
    }

}

function enter(id) {
    let el = document.getElementById(id)
    el.style.backgroundColor = '#D7E5E5'
}

function leave(id) {
    let el = document.getElementById(id)
    el.style.backgroundColor = '#fff'
}



document.getElementById("clearButton").onclick = function(e) {
    for (let i=1; i<8; i++) {
        console.log(document.getElementById(`f_${i}`).value)
        if (document.getElementById(`f_${i}`).value == "") {
            document.getElementById('phrase').style.display='block'
            let types=['Базовый','Стандартный','Люкс','Индивидуальный']
            document.getElementById('f_1').selectedIndex =id[2]-1
            let date = today.getFullYear()+'-'+month+'-'+today.getDate();
            document.getElementById('f_3').value=date
        } else {
            document.getElementById(`f_${i}`).value = ""
            document.getElementById('phrase').style.display='none'
        }
    }
}


function toForm(id) {
    let types=['Базовый','Стандартный','Люкс','Индивидуальный']
    scrollForm()
    document.getElementById('f_1').selectedIndex =id[2]-1
}



let today = new Date();
if (today.getMonth()+1 < 10) {
    month='0'+(today.getMonth()+1)
};

let date = today.getFullYear()+'-'+month+'-'+today.getDate();
document.getElementById('f_3').value=date

for (let i=1; i<8;i++) {
    document.getElementById(`f_${i}`).style.fontFamily='Comfortaa'
}
