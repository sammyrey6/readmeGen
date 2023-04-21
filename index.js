//init
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require ('./Utils/generateMarkdown')
//generate file

// Questions
inquirer
    .prompt([
        {
            type: 'Input',
            message: 'What is the title of your project?',
            name: 'Title',
        },
        {
            type: 'Input',
            message: 'Description',
            name: 'Description',
        },
        {
            type: 'Input',
            message: 'Installation',
            name: 'Installation',
        },
        {
            type: 'Input',
            message: 'Usage',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'License',
            name: 'License',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'Input',
            message: 'Contributing',
            name: 'Contributing',
        },
        {
            type: 'Input',
            message: 'Tests',
            name: 'Tests',
        },
        {
            type: 'Input',
            message: 'What is your Email?',
            name: 'Email',
        },
        {
            type: 'Input',
            message: 'What is your Github?',
            name: 'Github',
        }
         
    ])
    .then((answers) => {
    console.log(answers);
    fs.writeFile('README.md', generateMarkdown(answers), (err) =>{

    });

});