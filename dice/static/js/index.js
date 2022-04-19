let main = function () {
    let randomNumLeft = Math.floor(Math.random() * 6) + 1;
    let randomNumRight = Math.floor(Math.random() * 6) + 1;
    let leftDice = document.querySelector('.left-dice');
    let rightDice = document.querySelector('.right-dice');
    let flag = document.querySelector('.head-flag');
    let randomImgFolder = "/static/images/";
    let randomImgLeft = randomNumLeft + ".jpg";
    let randomImgRight = randomNumRight + ".jpg";
    let randomImgSrcLeft = randomImgFolder + randomImgLeft;
    let randomImgSrcRight = randomImgFolder + randomImgRight;

    // let restartButton = document.querySelector('.btn');

    // restartButton.addEventListener('click', function () {
    //     window.location.reload();
    // });
    leftDice.addEventListener('click', function () {
        leftDice.setAttribute("src", randomImgSrcLeft);
        rightDice.setAttribute("src", randomImgSrcRight);
        change();
    });

    // rightDice.addEventListener('focus', function () {
    //     rightDice.setAttribute("src", randomImgSrcRight);
    //     change();
    // });

    function change() {
        if (randomNumLeft > randomNumRight) {
            document.querySelector('h2').innerHTML = "Player Wins !!!";
            flag.setAttribute("style", "transform:rotateY(180deg)");
        } else if (randomNumLeft < randomNumRight) {
            document.querySelector('h2').innerHTML = "Computer Wins !!!";
            // flag.setAttribute("style", "transform:rotateY(180deg)");
        } else {
            document.querySelector('h2').innerHTML = "Draw !!!";
            flag.innerHTML = "⭕";
        }

    }
}

export {
    main
}