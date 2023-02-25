function (){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelector('.btn');
    let red = document.querySelector('.btn-red');
    let green = document.querySelector('.btn-green');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        }
    }
})();