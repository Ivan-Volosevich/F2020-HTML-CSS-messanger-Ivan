const express = require('express'); // ЗАПУСК: "node app"
const app = express();

const chat1 = [
    {
        id: '1',
        owner: 'yf8i7gujgiol',
        message: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        date: ''
    },
    {
        id: '2',
        owner: 0,
        message: "Nam nec tellus a odio tincidunt auctor?",
        date: ''
    },
    {
        id: '3',
        owner: 'yf8i7gujgiol',
        message: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem bibendum auctor,",
        date: ''
    },
    {
        id: '4',
        owner: 0,
        message: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
        date: ''
    },

];

const chat2 = [
    {
        id: '1',
        owner: 'yf8i7gujgiol',
        message: "Duis sed odio sit amet nibh vulputate cursus a ",
        date: ''
    },
    {
        id: '2',
        owner: 0,
        message: "Nam nec tellus a odio tincidunt auctor? 24534621124634636RGDHFHGD",
        date: ''
    },
    {
        id: '3',
        owner: 'yf8i7gujgiol',
        message: "Proin gravida nibh em bibendum auctor,",
        date: ''
    },
    {
        id: '4',
        owner: 0,
        message: "453675 rthrhbnfgnj call ris. Morbi accumsan ipsum velit.",
        date: ''
    },

];

const chatRooms = [

    {
        chat: chat1,
        id: 'faddfdfsfag53sadg',
    },
    {
        chat: chat2,
        id: 'fujkfdfsfag53safa',
    }
]


app.use(express.static('./')); // 'dist'

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname}); // 'dist/index.html'
})

app.get('/chats', function(req, res) {
    res.json(chatRooms);
})

const server = app.listen(4000, function() {
    console.log('success');
});

const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log(socket);

    socket.on('message', (data) => {
        console.log('------ ', data);
    })

    
})

//клиенту - cdn