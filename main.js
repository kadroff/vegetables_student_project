let potatoes = [0, 0, 0]
let carrot = [0, 0, 0]
let pepper = [0, 0, 0];
let tomato = [0, 0, 0];
let cabbage = [0, 0, 0];
let parsley = [0, 0, 0];
let start = false;
let speed = 1;
let vegetablesCount = 300;
let profit = 0;
let electro = 0;
let wage = 0;
let crash = 0;

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

const arrSum = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum;
}

setInterval(() => {
    if (start) {
        const randomIndex = getRandomInt(6)
        const randomIndexPotatioes = getRandomInt(3)
        const randomIndexCarrot = getRandomInt(3);
        const randomIndexPepper = getRandomInt(3);
        const randomIndexTomato = getRandomInt(3);

        if (randomIndex === 0) {
            potatoes[randomIndexPotatioes] += speed;
        } else if (randomIndex === 1) {
            carrot[randomIndexCarrot] += speed;
        } else if (randomIndex === 2) {
            pepper[randomIndexPepper] += speed;
        } else if (randomIndex === 3) {
            tomato[randomIndexTomato] += speed;
        } else if (randomIndex === 4) {
            cabbage[randomIndexTomato] += speed;
        } else if (randomIndex === 5) {
            parsley[randomIndexCarrot] += speed;
        }

        const potatoesSum = arrSum(potatoes);
        const carrotSum = arrSum(potatoes);
        const pepperSum = arrSum(pepper);
        const tomatoSum = arrSum(tomato);
        const cabbageSum = arrSum(cabbage);
        const parsleySum = arrSum(parsley);
        profit = potatoesSum * 30 + carrotSum * 35 + pepperSum * 25 + tomatoSum * 35 + cabbageSum * 70 + parsleySum * 50;
        electro += 20
        wage += 30

        if (potatoesOne > 0 && potatoesTwo > 0 && potatoesThree > 0) {
            alert("Контейнеры картофеля заполнены, они отправлены на загрузку")
            potatoes = [0, 0, 0];
        } else if (carrotOne > 0 && carrotTwo > 0 && carrotThree > 0) {
            alert("Контейнеры с морковью заполнены, они отправлены на загрузку")
            carrot = [0, 0, 0];
        } else if (pepperOne > 0 && pepperTwo > 0 && pepperThree > 0) {
            alert("Контейнеры с перцами заполнены, они отправлены на загрузку")
            pepper = [0, 0, 0];
        } else if (tomatoOne > 0 && tomatoTwo > 0 && tomatoThree > 0) {
            alert("Контейнеры с томатами заполнены, они отправлены на загрузку")
            tomato = [0, 0, 0];
        } else if (cabbageOne > 0 && cabbageTwo > 0 && cabbageThree > 0) {
            alert("Контейнеры с капустой заполнены, они отправлены на загрузку")
            cabbage = [0, 0, 0];
        } else if (parsleyOne > 0 && parsleyTwo > 0 && parsleyThree > 0) {
            alert("Контейнеры с петрушкой заполнены, они отправлены на загрузку")
            parsley = [0, 0, 0];
        }

        // Картофель
        document.getElementById('small_potatoes').innerHTML = `Мелкий <strong>  ${potatoes[0]} </strong>  (тара : ${potatoes[0] % 10 === 0 ? potatoesOne = potatoes[0].toString().slice(0, 1) : potatoesOne})`;
        document.getElementById('big_potatoes').innerHTML = `Крупный<strong>  ${potatoes[1]} </strong>(тара: ${potatoes[1] % 10 === 0 ? potatoesTwo = potatoes[1].toString().slice(0, 1) : potatoesTwo})`;
        document.getElementById('refuse_potatoes').innerHTML = `Брак <strong> ${potatoes[2]} </strong> (тара: ${potatoes[2] % 10 === 0 ? potatoesThree = potatoes[2].toString().slice(0, 1) : potatoesThree})`;

        // Морковь 
        document.getElementById('carrot_small').innerHTML = `Мелкий <strong>  ${carrot[0]} </strong> (тара: ${carrot[0] % 10 === 0 ? carrotOne = carrot[0].toString().slice(0, 1) : carrotOne})`;
        document.getElementById('carrot_big').innerHTML = `Крупный <strong> ${carrot[1]} </strong> (тара: ${carrot[1] % 10 === 0 ? carrotTwo = carrot[1].toString().slice(0, 1) : carrotTwo})`;
        document.getElementById('carrot_refuse').innerHTML = `Брак <strong> ${carrot[2]} </strong> (тара: ${carrot[2] % 10 === 0 ? carrotThree = carrot[2].toString().slice(0, 1) : carrotThree})`;

        // Перец
        document.getElementById('black_pepper').innerHTML = `Черный перец <strong> ${pepper[0]} </strong> (тара: ${pepper[0] % 10 === 0 ? pepperOne = pepper[0].toString().slice(0, 1) : pepperOne})`;
        document.getElementById('red_pepper').innerHTML = `Красный перец <strong> ${pepper[1]} </strong> (тара: ${pepper[1] % 10 === 0 ? pepperTwo = pepper[1].toString().slice(0, 1) : pepperTwo})`;
        document.getElementById('red_sweety_pepper').innerHTML = `Сладкий красный перец <strong> ${pepper[2]} </strong> (тара: ${pepper[2] % 10 === 0 ? pepperThree = pepper[2].toString().slice(0, 1) : pepperThree})`;

        // Томаты
        document.getElementById('medium_tomato').innerHTML = `Среднеранние томаты <strong> ${tomato[0]} </strong> (тара: ${tomato[0] % 10 === 0 ? tomatoOne = tomato[0].toString().slice(0, 1) : tomatoOne})`;
        document.getElementById('easy_tomato').innerHTML = `Раннеспелые томаты <strong> ${tomato[1]} </strong> (тара: ${tomato[1] % 15 === 0 ? tomatoTwo = tomato[1].toString().slice(0, 1) : tomatoTwo})`;
        document.getElementById('cherry_tomato').innerHTML = `Черри томаты <strong> ${tomato[2]} </strong> (тара: ${tomato[2] % 15 === 0 ? tomatoThree = tomato[2].toString().slice(0, 1) : tomatoThree})`;

        // Капуста
        document.getElementById('white_cabbage').innerHTML = `Белокочанная капуста <strong> ${cabbage[0]} </strong> (тара: ${cabbage[0] % 10 === 0 ? cabbageOne = cabbage[0].toString().slice(0, 1) : cabbageOne})`;
        document.getElementById('colors_cabbage').innerHTML = `Цветная капуста <strong> ${cabbage[1]} </strong>  (тара: ${cabbage[1] % 10 === 0 ? cabbageTwo = cabbage[1].toString().slice(0, 1) : cabbageTwo})`;
        document.getElementById('red_cabbage').innerHTML = `Краснокочанная капуста <strong> ${cabbage[2]} </strong>  (тара: ${cabbage[2] % 10 === 0 ? cabbageThree = cabbage[2].toString().slice(0, 1) : cabbageThree})`;

        // Петрушка
        document.getElementById('list_parsley').innerHTML = `Листовая <strong>  ${parsley[0]} </strong> (тара: ${parsley[0] % 10 === 0 ? parsleyOne = parsley[0].toString().slice(0, 1) : parsleyOne})`;
        document.getElementById('curly_parsley').innerHTML = `Кудрявая <strong> ${parsley[1]} </strong> (тара: ${parsley[1] % 10 === 0 ? parsleyTwo = parsley[1].toString().slice(0, 1) : parsleyTwo})`;
        document.getElementById('fail_parsley').innerHTML = `Брак <strong> ${parsley[2]} </strong> (тара: ${parsley[2] % 10 === 0 ? parsleyThree = parsley[2].toString().slice(0, 1) : parsleyThree})`;


        document.getElementById('vegetables').innerHTML = "Количество неотсортированных овощей: " + '<strong>' + vegetablesCount + '</strong>';
        document.getElementById('speed').innerHTML = "Текущая скорость сортировки: " + '<strong>' + speed + '</strong>';

        document.getElementById('profit').innerHTML = "Прибыль: " + '<strong>' + profit * 2 + 'руб.' + '</strong>';
        document.getElementById('electro').innerHTML = "Расходы на электроэнергию: " + '<strong>' + electro + 'руб.' + '</strong>';
        document.getElementById('wage').innerHTML = "Расходы на зп сотрудникам: " + '<strong>' + wage + 'руб.' + '</strong>';
        document.getElementById('crash').innerHTML = "Расходы на устранение аварии: " + '<strong>' + crash + 'руб.' + '</strong>';

        vegetablesCount -= speed;
        startWatch()
    }

    if (vegetablesCount <= 0) {
        if (confirm("Внимание. Все овощи отсортированы?")) {
            vegetablesCount = prompt("Введите количество овощей для сортировки", "")
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
            labels: ['Прибыль', 'Электроэнергия', 'ЗП', 'Авария'],
            datasets: [{
                label: 'Экономические показатели',
                data: [profit * 2, electro, wage, crash],
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

