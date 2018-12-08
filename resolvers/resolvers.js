const moment = require('moment');
const lodash = require('lodash');
const modelUser = require('./model/userData');
const userData = modelUser.userData;
const modelPost = require('./model/postData');
const postData = modelPost.postData;
const modelLike = require('./model/likeData');
const likeData = modelLike.likeData;

// Counter for new IDs (Always +1 from userData.size)
let idCountUser = 6;
// Counter for new Posts (Always +1 from postData.size)
let idCountPost = 4;
// Counter for new Liks (Always +1 from postData.size)
let idCountLike = 1;

// Resolver Function
const resolvers = {
    Query: {
        info: () => `This is the GraphQL API for ESD. Made by Ajeet and Patrick :)`,
        users: () => userData,
        getUserByID: (root, args) => {
            const insertAtIndex = userData.findIndex(x => x.id === args.id);
            if (userData[insertAtIndex] === undefined) {
                throw new Error('User with ID: ' + args.id + ' is not in the System');
            } else {
                return userData.find(user => user.id === args.id);
            }
        },
        getUserByEmail: (root, args) => {
            return userData.find(user => user.email === args.email)
        },
        getPostByUserID: (root, args) => {
            const insertAtIndex = userData.findIndex(x => x.id === args.id);
            if (userData[insertAtIndex] === undefined) {
                throw new Error('User with ID: ' + args.id + ' is not in the System');
            } else {
                const postscount = userData[insertAtIndex].posts.length;
                console.log(userData[insertAtIndex].posts[0].id);
                if (userData[insertAtIndex].posts[0].id === "") {
                    throw new Error('User with ID: ' + args.id + ' has no posts yet');
                } else {
                    return userData[insertAtIndex].posts;
                }
            }
        },
        getLatestPostByUserID: (root, args) => {
            const insertAtIndex = userData.findIndex(x => x.id === args.id);
            if (userData[insertAtIndex] === undefined) {
                throw new Error('User with ID: ' + args.id + ' is not in the System');
            } else {
                const postscount = userData[insertAtIndex].posts.length;
                console.log(userData[insertAtIndex].posts[0].id);
                if (userData[insertAtIndex].posts[0].id === "") {
                    throw new Error('User with ID: ' + args.id + ' has no posts yet');
                } else {
                    return userData[insertAtIndex].posts.pop();
                }
            }
        }
    },
    Mutation: {
        createUser: (root, args) => {
            const user = {
                id: `user-${idCountUser++}`,
                name: args.name,
                email: args.email,
                age: args.age,
                accountCreated: moment().format('MMMM Do YYYY, h:mm:ss a'),
                posts: [{
                    id: '',
                    title: '',
                    body: '',
                    postCreated: ''
                }]
            };
            userData.push(user);
            return user
        },
        deleteUser: (root, args) => {
            const picked = lodash.filter(userData, {'id': args.id});
            if (picked.length === 1) {
                lodash.remove(userData, function (e) {
                    return e.id === args.id;
                });
                return true;
            } else {
                throw new Error('User with ID: ' + args.id + ' is not in the System');
            }
        },
        createPost: (root, args) => {
            const picked = lodash.filter(userData, {'id': args.userID});
            if (picked.length === 1) {
                const post = {
                    id: `post-${idCountPost++}`,
                    title: args.title,
                    body: args.body,
                    postCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
                };
                postData.push(post);
                const insertAtIndex = userData.findIndex(x => x.id === args.userID);
                const tmp = userData[insertAtIndex].posts.length;
                // if (userData[insertAtIndex].posts[0]['id'] === "") {
                //     userData[insertAtIndex].posts.push(post);
                //     delete userData[insertAtIndex].posts[0];
                // } else {
                //     userData[insertAtIndex].posts.push(post);
                // }
                userData[insertAtIndex].posts.push(post);
                return true;
            } else {
                throw new Error('User with ID: ' + args.id + ' is not in the System');
            }
        },
    },
};

// Module export for Index.js
module.exports = {
    resolvers: resolvers
};