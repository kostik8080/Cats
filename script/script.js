const nameCats = [
    'Кот с усами',
    'Кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'
]

const imageCats = [
    'images/cats/cats1.png',
    'images/cats/cats2.png',
    'images/cats/cats3.png',
    'images/cats/cats4.png'
]

const listCats = [
    {
        type: "Гладкошерстный", 
        color: "Белый с рыжими глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    {
        type: "Гладкошерстный", 
        color: "Трёхцветная с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    {
        type: "Гладкошерстный", 
        color: "Черно-белый с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    {
        type: "Гладкошерстный", 
        color: "Трёхцветная с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
];
    


for (let i = 0; i < nameCats.length; i++) {
    const dataNameCats = document.createTextNode(nameCats[i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats)
}

const imagePath = document.querySelectorAll('.thumb img');
for (let i = 0; i < imagePath.length; i++) {
    imagePath[i].src = imageCats[i];
    imagePath[i].alt = nameCats[i];
}

for (let i = 0; i < listCats.length; i++) {
    const cat = listCats[i]
    const infoList = `
    <ul>
        <li>${cat.type}</li>
        <li>${cat.color}</li>
        <li>${cat.vaccine}</li>
        <li>${cat.passport}</li>
        <li>${cat.things}</li>
        <li>${cat.tray}</li>
      </ul>
    `;
    const targetElement = document.querySelector(`#name-cat-${i+1}`);
    targetElement.insertAdjacentHTML('afterend', infoList);
}
