const moment = require('moment');

// data for User
let userData = [{
    id: 'user-1',
    name: 'Ajeet Sandu',
    email: 'a.sandu@student.fontys.nl',
    age: 23,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    connectedUsers: [],
    posts: [{id: 'post-1',
        title: 'Hello Word',
        body: 'Hi guys, Welcome to the our GraphQL Api. Have fun',
        postCreated: moment().format('MMMM Do YYYY, h:mm:ss a')},
        {id: 'post-2',
        title: 'Hello Word again',
        body: 'Something bla bla ...',
        postCreated: moment().format('MMMM Do YYYY, h:mm:ss a')}]
},{
    id: 'user-2',
    name: 'Patrick Richter',
    email: 'p.richter@student.fontys.nl',
    age: 26,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    connectedUsers: [],
    posts:[{id: '',
        title: '',
        body: '',
        postCreated: ''}]
},{
    id: 'user-3',
    name: 'James Brown',
    email: 'j.brown@student.mail.nl',
    age: 21,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    connectedUsers: [],
    posts:[{id: '',
        title: '',
        body: '',
        postCreated: ''}]
},{
    id: 'user-4',
    name: 'Linda Stiller',
    email: 'l.stiller@student.mail.nl',
    age: 19,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    connectedUsers: [],
    posts:[{id: '',
        title: '',
        body: '',
        postCreated: ''}]
},{
    id: 'user-5',
    name: 'Jerry Callas',
    email: 'j.callas@student.fontys.nl',
    age: 28,
    accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
    connectedUsers: [],
    posts:[{id: '',
        title: '',
        body: '',
        postCreated: ''}]
}];

module.exports = {
    userData: userData
};