/** REQUIRES AND SETUPS **/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const socket = require('socket.io');

const app = express();
// const server = require('http').createServer(app);
const server = app.listen(3000, function () {
    console.log('listening on port 3000');
})

const mongoDB = "mongodb://favors:favors@ds159509.mlab.com:59509/favors";

mongoose.connect(mongoDB);
const db = mongoose.connection;

const SUCCESS = 1;
const PENDING = 0;
const IN_PROCESS = 1;

/** SCHEMAS AND MODELS **/

const postCategorySchema = new mongoose.Schema({
    categoryName: String
});
const PostCategory = mongoose.model('PostCategory', postCategorySchema);

const userSchema = new mongoose.Schema({
    name: String,
    score: Number
});
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
    user: String,
    location: [Number, Number],
    postHeader: String,
    postText: String,
    postCategory: String,
    status: Number
});
const Post = mongoose.model('Post', postSchema);



/** FUNCTIONS TO EXPORT **/


const getAllUsers = function(cb){
    User.find().exec(function(err, data){
        cb(data)
    })
}

const getUser = function(userName, cb){
    User.findOne({name: userName}, function(err, data){
        cb(data)
    })
}

const getAllPostCategories = function(cb){
    PostCategory.find().exec(function(err, data){
        cb(data)
    })
}

const getAllPosts = function(cb){
    Post.find().exec(function(err, data){
        cb(data)
    })
}

const getPost = function(postHeader, cb){
    Post.findOne({postHeader: postHeader}, function(err, data){
        cb(data)
    })
}

const getPostsByUser = function(userName,cb){
    Post.find({user: userName}).exec(function(err, data){
        cb(data)
    })
}

const makeUser = function(userName, cb){
    const user = new User({name: userName, score: 0});
    user.save(function(err) {
        if (err){
            cb(err)
        }
        else{
            cb(SUCCESS)
        }
    })
};

const makePost = function(userName, postHeader, postText, location, postCategory, cb){
    const post = new Post({name: userName, location: location, postHeader: postHeader,
        postText:postText, postCategory: postCategory, status: PENDING});
    post.save(function(err) {
        if (err){
            cb(err)
        }
        else{
            cb(SUCCESS)
        }
    })
};

const updatePostStatus = function(postHeader, status, cb){
    Post.findOne({postHeader: postHeader}, function(err, data){
        if (err) {
            cb(err);
        }
        else
        {
            data.status = status;
            data.save(function(err){
                if (err){
                    cb(err);
                }
                else{
                    cb(SUCCESS);
                }
            })
        }
    })
}


/** MIDDLEWARE **/

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// Path middleware
app.use(express.static('public'));

/** SERVER LOGIC **/

app.get('/', function(req, res) {
    res.sendFile('C:\\Users\\Nadav_LT\\Desktop\\HUJI-HACK\\public\\nadav.html');
});


const io = socket(server);

io.on('connection', function(socket){
    console.log("Made connection!");
    socket.emit('nadav', "success!");
})