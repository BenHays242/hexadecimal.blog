// Author: Ben Hays <benhays42@hexadecimal.blog> 
// This file is licensed under the MIT license
//
// ABOUT:
// This file contains configuration data used by the the rest of the site
// *Most* of these configs should be considered constants and should be marked as such
// It's recommended to change these constants when setting up your instance of this app

module.exports = {
    PORT: 3000, // This is the port that will be used by Express.js, not the port for Nginx
    MONGODB_PORT: 27017, // This is the port that will be used by Mongoose for connecting to MongoDB
    DEBUG: true, // Set to true to enable debug logging
}