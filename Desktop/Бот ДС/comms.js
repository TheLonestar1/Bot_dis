const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс


function test(robot,mess,args){
    mess.channel.send('Test!');
}


var comms_list = [{
    name : "test",
    out: test,
    about: "Test comm"
}];


module.exports.comms = comms_list;