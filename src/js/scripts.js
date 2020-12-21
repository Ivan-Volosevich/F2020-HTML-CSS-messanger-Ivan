document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.chat__chatting'); //document.getElementsByClassName
    const sendButton = document.getElementById('send-message');
    const messageInput = document.querySelector('chat__input');
    //const friendsListContainer = document.querySelector('.friends-list');

    //const socket = io('http')

    let charRooms = [];

    fetch('http://localhost:4000/chats')
    .then((res) => {
        return (res.json());
    })
    .then((result) => {
     chatRooms = result;
    })


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

        let message = `
        <div class="message ${options.owner ? '' : 'chat__chatting_user' }">
            <div class="chat__chatting"></div>
                <img src="${options.img ? options.img : 'https://fakeimg.pl/50x50/'}>
                <div class="chat__text">${options.message}</div>
                <div class="chat__date">${new Date(options.date).toTimeString()}</div>
            <div></div>
        </div>
        `;

        container.insertAdjacentHTML('beforeend', message);
    
        const msgText = document.createElement('div');
        msgText.classList.add('chat__text');
        msgText.innerText = options.message;
    
        msg.appendChild(msgText);
    
        container.append(msg);
    }

});