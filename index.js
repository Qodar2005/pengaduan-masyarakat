function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
    setVisible('.page', true);
    setVisible('#loading-screen', false);
});

window.addEventListener('load', function () {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.querySelector('.page');

    loadingScreen.style.display = 'none';
    content.style.display = 'block';
});