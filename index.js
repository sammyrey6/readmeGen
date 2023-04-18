//init
const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml= ({Title, Location, Linkedin, Github})


inquirer
    .prompt([
        {
            type: 'Input',
            message: 'What art thou name?',
            name: 'Title',
        },
        {
            type: 'Input',
            message: 'Whre doth thee liveth?',
            name: 'Location',
        },
        {
            type: 'Input',
            message: 'What is thy github?',
            name: 'Github',
        },
        {
            type: 'Input',
            message: 'What is thy Linkedin?',
            name: 'Linkedin',
        },
        {
            type: 'confirm',
            message: 'Art thou crying inside?',
            choices: ['yes','no'],
            name: 'Feelings',
            
        } 
    ])
    .then((answers) =>
    console.log(answers),

  );