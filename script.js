    let screen = document.querySelector('.screen');
    let buttons = document.querySelector('.btn');
    let red = document.querySelector('.btn-red');
    let green = document.querySelector('.btn-green');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

        equal.addEventListener('click', function(e) {
            if (screen.value === '') {
                screen.value = "Please Enter";
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        })

        clear.addEventListener('click', function(e) {
            screen.value ="";
        })