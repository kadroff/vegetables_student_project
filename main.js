let vegetables = [0, 0, 0]
let start = false;
let speed = 1;
let vegetablesCount = 300;

let hrs = 0
let mins = 0
let secs = 0

setInterval(() => {
    if (start) {
        const randomIndex = getRandomInt(3)
        vegetables[randomIndex] += speed;
        vegetablesCount -= speed;
        document.getElementById('roots').innerHTML = "Корневые " + '<strong>' + vegetables[0] + '</strong>';
        document.getElementById('fruits').innerHTML = "Плодовые " + '<strong>' + vegetables[1] + '</strong>';
        document.getElementById('leafy').innerHTML = "Листовые " + '<strong>' + vegetables[2] + '</strong>';
        document.getElementById('vegetables').innerHTML = "Количество овощей: " + '<strong>' + vegetablesCount + '</strong>';
        document.getElementById('speed').innerHTML = "Текущая скорость сортировки: " + '<strong>' + speed + '</strong>';

        document.getElementById('economic_roots').innerHTML = "Экономический показатель: " + '<strong>' + vegetables[0] * 25 + 'руб.' + '</strong>';
        document.getElementById('economic_fruits').innerHTML = "Экономический показатель: " + '<strong>' + vegetables[1] * 25 + 'руб.' + '</strong>';
        document.getElementById('economic_leafy').innerHTML = "Экономический показатель: " + '<strong>' + vegetables[2] * 25 + 'руб.' + '</strong>';

        startWatch()
    }

    if (vegetablesCount <= 0) {
        if (confirm("Внимание. Все овощи отсортированы?")) {
            vegetablesCount = prompt("Введите количество овощей для сортировки", "")
        } else {
            document.location.reload()
        }
    }

    console.log(vegetables);
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
    if (speed < 5) {
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
    document.querySelector('#session_time').innerHTML = `Время текущей сессии: ${hrs}:${mins}:${secs}`
}


const createGraphic = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Корневые', 'Плодовые', 'Листовые'],
            datasets: [{
                label: 'Экономические показатели',
                data: [vegetables[0] * 25, vegetables[1] * 25, vegetables[2] * 25],
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
                        labelString: 'Типы овощей',
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
    alert('Отсутствует подключение к интернету. Попробуй перезагрузить систему')
}

document.querySelector('#supply_crash').onclick = () => {
    start = false;
    alert('Произошли неполадки с поставкой овощей. Попробуй перезагрузить систему')
}

document.querySelector('#send_vegetables').onclick = () => {
    var sel = document.getElementById('select');
    var opt = sel.options[sel.selectedIndex];
    alert('Все овощи отправлены на ' + opt.value)
}