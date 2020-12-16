let potatoes = [0, 0, 0, 0]
let carrot = [0, 0, 0]
let pepper = [0, 0, 0, 0];
let tomato = [0, 0, 0];
let cabbage = [0, 0, 0, 0];
let parsley = [0, 0, 0];
let start = false;
let speed = 1;
let vegetablesCount = 300;
let profit = 0;
let electro = 0;
let wage = 0;
let crash = 0;

let potatoesCount = 30;
let pepperCount = 20;
let cabbageCount = 35;

let potatoesOne = 0;
let potatoesTwo = 0;
let potatoesThree = 0;

let carrotOne = 0;
let carrotTwo = 0;
let carrotThree = 0;

let pepperOne = 0;
let pepperTwo = 0;
let pepperThree = 0;

let tomatoOne = 0;
let tomatoTwo = 0;
let tomatoThree = 0;

let cabbageOne = 0;
let cabbageTwo = 0;
let cabbageThree = 0;

let parsleyOne = 0;
let parsleyTwo = 0;
let parsleyThree = 0;

let hrs = 0
let mins = 0
let secs = 0

let potatoesContainer = 0;
let pepperContainer = 0;
let cabbageContainer = 0;
let price_container = 0;

let container = 10;

const arrSum = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum;
}

setInterval(() => {
    if (start) {
        const randomIndex = getRandomInt(3)
        const randomIndexPotatioes = getRandomInt(4)
        const randomIndexPepper = getRandomInt(4);
        const randomIndexCabbage = getRandomInt(4);

        if (randomIndex === 0) {
            potatoes[randomIndexPotatioes] += speed;
            potatoesContainer++;
        } else if (randomIndex === 1) {
            pepper[randomIndexPepper] += speed;
            pepperContainer++
        } else if (randomIndex === 2) {
            cabbage[randomIndexCabbage] += speed;
            cabbageContainer++;
        }

        if (potatoesContainer === 4) {
            potatoesCount -= speed;
            potatoesContainer = 0;
        } else if (pepperContainer === 4) {
            pepperCount -= speed;
            pepperContainer = 0;
        } else if (cabbageContainer === 4) {
            cabbageCount -= speed;
            cabbageContainer = 0;
        }


        const potatoesSum = arrSum(potatoes);
        const carrotSum = arrSum(potatoes);
        const pepperSum = arrSum(pepper);
        const tomatoSum = arrSum(tomato);
        const cabbageSum = arrSum(cabbage);
        // profit = potatoesSum * 30 + carrotSum * 35 + pepperSum * 25 + tomatoSum * 35 + cabbageSum * 70 + parsleySum * 50;
        electro += 20
        wage += 30

        if (potatoesSum > 15) {
            alert("Тары с картофелем заполнены и помещены в контейнер")
            potatoes = [0, 0, 0, 0];
            container--;
            profit += 3000
        }

        if (cabbageSum > 15) {
            alert("Тары с капустой заполнены и помещены в контейнер")
            cabbage = [0, 0, 0, 0];
            container--;
            profit += 2500
        }

        if (pepperSum > 15) {
            alert("Тары с перцем заполнены и помещены в контейнер")
            pepper = [0, 0, 0, 0];
            container--;
            profit += 4000
        }

        document.getElementById('potatoes').innerHTML = `Картофель ${potatoesCount} тонн`
        document.getElementById('pepper').innerHTML = `Перец ${pepperCount} тонн`
        document.getElementById('cabbage').innerHTML = `Капуста ${cabbageCount} тонн`

        // Картофель
        document.getElementById('small_potatoes').innerHTML = `Тара с ранними сортами <strong>  ${potatoes[0]} </strong>  (по 250кг)`;
        document.getElementById('big_potatoes').innerHTML = `Тара с средними сортами <strong>  ${potatoes[1]} </strong> (по 250кг)`;
        document.getElementById('last_potatoes').innerHTML = `Тара с поздними сорта картофеля <strong> ${potatoes[2]} </strong> (по 250кг)`;
        document.getElementById('refuse_potatoes').innerHTML = `Тара с браком <strong> ${potatoes[3]} </strong> `;


        // Перец
        document.getElementById('black_pepper').innerHTML = `Тара с черным перцем <strong> ${pepper[0]} </strong> (по 250кг)`;
        document.getElementById('red_pepper').innerHTML = `Тара с красным перцем <strong> ${pepper[1]} </strong> (по 250кг)`;
        document.getElementById('red_sweety_pepper').innerHTML = `Тара с сладким красным перцем <strong> ${pepper[2]} </strong> (по 250кг)`;
        document.getElementById('refuse_pepper').innerHTML = `Тара с браком <strong> ${pepper[3]} </strong> (по 250кг)`;


        // Капуста
        document.getElementById('white_cabbage').innerHTML = `Тара с белокочанной капустой <strong> ${cabbage[0]} </strong> (по 250кг)`;
        document.getElementById('colors_cabbage').innerHTML = `Тара с цветной капустой <strong> ${cabbage[1]} </strong> (по 250кг)`;
        document.getElementById('red_cabbage').innerHTML = `Тара с краснокочанной капустой <strong> ${cabbage[2]} </strong> (по 250кг)`;
        document.getElementById('refuse_cabbage').innerHTML = `Тара с браком <strong> ${cabbage[3]} </strong> (по 250кг)`;




        document.getElementById('vegetables').innerHTML = "Количество контейнеров: " + '<strong>' + container + '</strong>';
        document.getElementById('speed').innerHTML = "Текущая скорость сортировки: " + '<strong>' + speed + '</strong>';

        document.getElementById('profit').innerHTML = "Прибыль: " + '<strong>' + profit + 'руб.' + '</strong>';
        document.getElementById('electro').innerHTML = "Расходы на электроэнергию: " + '<strong>' + electro + 'руб.' + '</strong>';
        document.getElementById('wage').innerHTML = "Расходы на зп сотрудникам: " + '<strong>' + wage + 'руб.' + '</strong>';
        document.getElementById('crash').innerHTML = "Расходы на устранение аварии: " + '<strong>' + crash + 'руб.' + '</strong>';
        document.getElementById('price_container').innerHTML = "Расходы на покупку контейнеров: " + '<strong>' + price_container + 'руб.' + '</strong>';

        vegetablesCount -= speed;
        startWatch()
    }

    if (potatoesCount <= 0) {
        if (confirm("Внимание. Весь картофель отсортирован?")) {
            potatoesCount = prompt("Введите количество тонн для сортировки", "")
        }
    }
    if (cabbageCount <= 0) {
        if (confirm("Внимание. Вся капуста отсортирована?")) {
            cabbageCount = prompt("Введите количество тонн для сортировки", "")
        }
    }
    if (pepperCount <= 0) {
        if (confirm("Внимание. Весь перец отсортирован?")) {
            pepperCount = prompt("Введите количество тонн для сортировки", "")
        }
    }

    if (container <= 0) {
        if (confirm("Внимание. Все контейнеры закончены, закуплены новые")) {
            container = 20;
            price_container = 30000;
        }
    }
}, 1000)



document.querySelector('.start').onclick = () => {
    start = true;
    alert('Система запущена')
}

document.querySelector('.stop').onclick = () => {
    start = false;
    alert('Система остановлена')
}

document.querySelector('.restart').onclick = () => {
    document.location.reload();
    alert('Система перезагружена')
}

document.querySelector('.speed_up').onclick = () => {
    if (speed < 2) {
        speed += 1;
        alert('Скорость сортировки увеличена')
    }
}

document.querySelector('.speed_down').onclick = () => {
    if (speed > 1) {
        speed -= 1;
        alert('Скорость сортировки снижена')
    }
}

document.querySelector('#create_graphic').onclick = () => {
    if (start)
        createGraphic();
}



const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}



function startWatch() {
    if (secs < 59) {
        secs += 1
    } else {
        if (mins < 59) {
            mins += 1
            secs = 0
        } else {
            hrs += 1
            mins = 0
        }
    }
    document.querySelector('#session_time').innerHTML = `Время текущей сессии: ${hrs}: ${mins}: ${secs} `
}


const createGraphic = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Прибыль', 'Электроэнергия', 'ЗП', 'Авария', 'Затраты на покупку контейнеров'],
            datasets: [{
                label: 'Экономические показатели',
                data: [profit * 2, electro, wage, crash, price_container],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Сумма в руб.',
                        fontSize: 14,
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Экономические показатели',
                        fontSize: 16,
                    }
                }]
            }
        }
    });
}
createGraphic();

document.querySelector('#network_crash').onclick = () => {
    start = false;
    alert('Произошли неполадки в поставке. Система приостановлена')
    crash += 10000
}

document.querySelector('#supply_crash').onclick = () => {
    start = false;
    alert('Произошли неполадки в системе фильтрации овощей. Система приостановлена')
    crash += 15000
}

