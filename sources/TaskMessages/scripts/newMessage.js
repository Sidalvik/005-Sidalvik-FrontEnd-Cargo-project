'use strict'

function prepPush() {
    let  iteration = 0;

    let intervalId = null;

    let timeout = Number(document.getElementById('timeout').value);
    timeout = isNaN(timeout) ? 5 : timeout;
    document.getElementById('timeout').value = timeout;
    
    if (!("Notification" in window)) {
        alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }
    
    console.log('iteration: ' + iteration);
    document.getElementById('output').value =  'startPush. Iteration: ' + iteration;
    


    Notification.requestPermission(function(permission){
        // переменная permission содержит результат запроса
        console.log('Результат запроса прав:', permission);
        document.getElementById('output').value = 'Результат запроса прав:' + permission; 
    });
    
    const stopPush = () => {
        document.getElementById('last-btn').value = 'stopPush';
        console.log('stop Push');
        clearInterval(intervalId);
        document.querySelector('#btn-start-push').removeAttribute('disabled');
        intervalId = null;
        iteration = 0;
        document.getElementById('output').value = 'Stop Push';
    };

    const startPush = function () {
        // navigator.serviceWorker.register('sw.js');
        document.getElementById('last-btn').value = 'startPush';
        console.log('start Push');
                intervalId = setInterval(() => {
                // new Notification('Проверка уведомлений!!!',{
                //     body: 'Проверка уведомлений. Основное сообщение #'.concat(iteration), 
                //     dir: 'auto' });
            //    --
                    Notification.requestPermission(function(result) {
                        if (result === 'granted') {
                            Notification.requestPermission().then(function(registration) {
                            registration.showNotification('Vibration Sample', {
                            body: 'Buzz! Buzz!',
                            vibrate: [200, 100, 200, 100, 200, 100, 200],
                            tag: 'vibration-sample'
                            });
                        });
                        }
                    });
            // --
                    console.log(iteration);
                document.getElementById('output').value =  'StartPush. Notification: ' + iteration++;
                document.querySelector('#btn-start-push').setAttribute('disabled', '');
            }

                        , 5 * 1000);
    }

    return [startPush, stopPush];
    
}

document.getElementById('output').value = 'startPush Загрузился';

const [startPush, stopPush] = prepPush();
document.getElementById('btn-start-push').addEventListener('click',startPush);
document.getElementById('btn-stop-push').addEventListener('click',stopPush);