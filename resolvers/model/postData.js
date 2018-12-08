const moment = require('moment');

// data for Post
let postData = [{
    id: 'post-1',
    title: 'Hello Word',
    body: 'Hi guys, Welcome to the our GraphQL Api. Have fun',
    postCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    likes:[]
},{
    id: 'post-2',
    title: 'Hello World again',
    body: 'This is my second post',
    postCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    likes:[]
},{
    id: 'post-3',
    title: 'Whats up guys?',
    body: 'What are u doing? I am doing GraphQl ... ',
    postCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    likes:[]
}
];

module.exports = {
    postData: postData
};