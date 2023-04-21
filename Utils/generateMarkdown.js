// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None'){
        return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    }
    return ''
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
    if (license !== 'None'){
        return `- [license](#license)`
    }
    return ''
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    if (license !== 'None'){
        return `## License\n This project is licensed under the ${license} license`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.License)}
## Description

${data.Description}

##Table of Contents
- [Installation](##Installation)
${renderLicenseLink (data.License)}
- [Usage](# Usage)
- [Contributing](# Contributing)
- [Tests](# Tests)
- [Questions](# Question/advise)


## Usage
${data.Usage}


## Installation

${data.Installation}


## Question/advise
If you have any questions you can email me at ${data.Email}.

If you want to see more of my work you can check out my Github at [${data.Github}](https://github.com/${data.Github}).


## Contributing

${data.Contributing}
## Tests

${data.Tests}

${renderLicenseSection(data.License)}
`;
}

module.exports = generateMarkdown;

