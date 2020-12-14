document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.chat__chatting'); //document.getElementsByClassName
    const sendButton = document.getElementById('send-message');
    const messageInput = document.querySelector('chat__input');


    const chat1 = [
        {
            message: "Lorem text",
            date: '',
            id: '1',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "Lorem text 2",
            date: '',
            id: '2',
            owner: 0
        },
        {
            message: "Lorem text sample",
            date: '',
            id: '3',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "Lorem text 4",
            date: '',
            id: '4',
            owner: 0
        },
    
    ];

    sendButton.addEventListener('click', (event) => {  //короткая записть функции
        if (messageInput.value) {  //ошибка
            const msg = {
                message: messageInput.value,
                id: chat1.length + 1,
                owner: 0,
                date: Date.now()
            }
            chat1.push(msg);
            createMessage(msg);
            console.log(chat1);
        }
    })
    
    chat1.forEach(function(msgOptions) {
        createMessage(msgOptions);
    })
    
    function createMessage(options) {
        const msg = document.createElement('div');
        msg.classList.add('chat__chatting');
        if (options.owner === 0) {
            msg.classList.add('chat__chatting_user');
        }
    
        const msgText = document.createElement('div');
        msgText.classList.add('chat__text');
        msgText.innerText = options.message;
    
        msg.appendChild(msgText);
    
        container.append(msg);
    }

});