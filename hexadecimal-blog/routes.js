// Author: Ben Hays <benhays42@hexadecimal.blog> 
// This file is licensed under the MIT license
//
// ABOUT:
// This file contains all the routes that are available, and used by ExpressJS
// Routes.js is imported from the index.js file, which directly uses the routes as middleware

module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index', {title: 'Hexadecimal - Just a blog, really'});
    });

};