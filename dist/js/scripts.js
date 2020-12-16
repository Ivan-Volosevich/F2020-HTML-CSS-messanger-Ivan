document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.chat__chatting'); //document.getElementsByClassName
    const sendButton = document.getElementById('send-message');
    const messageInput = document.querySelector('chat__input');


    const chat1 = [
        {
            message: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
            date: '',
            id: '1',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "Nam nec tellus a odio tincidunt auctor?",
            date: '',
            id: '2',
            owner: 0
        },
        {
            message: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem bibendum auctor,",
            date: '',
            id: '3',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
            date: '',
            id: '4',
            owner: 0
        },
    
    ];

    const chat2 = [
        {
            message: "Duis sed odio sit amet nibh vulputate cursus a ",
            date: '',
            id: '1',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "Nam nec tellus a odio tincidunt auctor? 24534621124634636RGDHFHGD",
            date: '',
            id: '2',
            owner: 0
        },
        {
            message: "Proin gravida nibh em bibendum auctor,",
            date: '',
            id: '3',
            owner: 'yf8i7gujgiol'
        },
        {
            message: "453675 rthrhbnfgnj call ris. Morbi accumsan ipsum velit.",
            date: '',
            id: '4',
            owner: 0
        },
    
    ];

    const chatRoom = [

        {
            chat: chat1,
            id: 'faddfdfsfag53sadg',
        },
        {
            chat: chat2,
            id: 'fujkfdfsfag53safa',
        }
    ]

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