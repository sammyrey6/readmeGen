//init
const inquirer = require("inquirer")
const fs = require("fs")
//generate file
 const generateFile= ({Title, Description, Installation, Usage, License, Contributing, Tests, Questions}) =>
`# ${Title}

Table of Contents
*input yourself*

${Usage}

## Description

${Description}

## Getting Started

### Installing

${Installation}


## Question/advise

${Questions}

## Authors

${Contributing}
## Tests

${Tests}

## License

${License}
`
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
            type: 'Input',
            message: 'License',
            name: 'License',
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
            message: 'Questions',
            name: 'Questions',
        }
         
    ])
    .then((answers) => {
    console.log(answers);
    fs.writeFile('README.md', generateFile(answers), (err) =>{

    });

});