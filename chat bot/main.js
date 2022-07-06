const btnBot = document.querySelector('.bot');
const btnClose = document.querySelector('.close');
const chatBotDiv = document.querySelector('.chatBot');
let open = false;

btnBot.onclick = () => {
    if (!open) {
        chatBotDiv.style.display = 'block';
        btnBot.style.bottom = '110px';
        btnBot.style.top = '350px'
        btnBot.style.height = '35px';
        btnBot.style.right = '800px';
        btnBot.style.width = '60px';
        btnBot.style.zIndex = '1';

        open = true;
    } else {
        chatBotDiv.style.display = 'none';
        btnBot.style.bottom = '10px';
        btnBot.style.right = '100px';
        btnBot.style.width = '50px';
        open = false;
    }
}

btnClose.onclick = () => {
    chatBotDiv.style.display = 'none';
    btnBot.style.bottom = '10px';
    btnBot.style.right = '10px';
    btnBot.style.width = '50px';
    open = false;
}