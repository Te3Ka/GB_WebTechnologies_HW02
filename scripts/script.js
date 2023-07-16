function whatYourName() {
    let name_user = prompt("Как тебя зовут?");
    alert("Приветствую, " + name_user);

    let age_user = prompt("Сколько тебе лет?");
    switch (true) {
        case (age_user < 8):
            alert("Здравствуй, юнлинг");
            break;
        case (8 < age_user && age_user <= 15):
            alert("Здравствуй, юный падаван");
            break;
        case (15 < age_user && age_user <= 21):
            alert("Приветствую, джедай");
            break;
        case (21 < age_user && age_user <= 33):
            alert("Приветствую, рыцарь-джедай");
            break;
        case (33 < age_user && age_user <= 50):
            alert("Уважаемый магистр-джедай");
            break;
        case (50 < age_user && age_user < 100):
            alert("Магистр Винду?!");
            break
        case (age_user >= 100):
            alert("Мастер Йода?!?!?!");
            break;
    }
}

function changeColorH1() {
    let element = document.getElementById("h1_el");
    console.log(element);
    if (element.classList.contains("h1_changes")) {
        element.classList.remove("h1_changes");
    } else {
        element.classList.add("h1_changes");
    }
}

function changeColorP() {
    let element = document.getElementById("p_main_text");
    console.log(element);
    if (element.classList.contains("p_changes")) {
        element.classList.remove("p_changes");
    } else {
        element.classList.add("p_changes");
    }

    let element1 = document.getElementById("p_main_text_1");
    console.log(element1);
    if (element1.classList.contains("p_changes")) {
        element1.classList.remove("p_changes");
    } else {
        element1.classList.add("p_changes");
    }
}

function changeColorRecenseList() {
    let element = document.getElementById("recense_list");
    console.log(element);
    if (element.classList.contains("list_changes")) {
        element.classList.remove("list_changes");
    } else {
        element.classList.add("list_changes");
    }
}

let btn_1 = document.getElementById("btn_1");
console.log(btn_1);
btn_1.addEventListener('click', whatYourName);

let btn_2 = document.getElementById("btn_2");
console.log(btn_2);
btn_2.addEventListener('click', changeColorH1);

let btn_3 = document.getElementById("btn_3");
console.log(btn_3);
btn_3.addEventListener('click', changeColorP);

let btn_4 = document.getElementById("btn_4");
console.log(btn_4);
btn_4.addEventListener('click', changeColorRecenseList);