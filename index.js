var license =""

var inquirer = require('inquirer');
inquirer
  .prompt([
        { name:"project_title",
        type: "input",
        message: "Provide a title of your project",
        },

        { name:"description",
        type: "input",
        message: "Provide a short description of your project.",
        },

        { name:"usage",
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        },

        { name:"Contributing",
        type: "input",
        message: "Provide ways to contribute",
        },
        { name:"test",
        type: "input",
        message: "Provide examples on how to run them here",
        },
        
        {name:"license",
        type: "list",
        message: "Please choose a license to proceed.",
        choices: [ "Apache License 2.0", "GNU General Public License v2.0","GNU General Public License v3.0","ISC License","MIT License","BLANK"]
        },

  ])

  .then((answers) => {
    licenseChoice(answers)
      htmlrender(answers)
  })
  
const htmlrender= (answers)=> {
   read_me =  `
   # <Your-Project-Title>

   ## Description
   
   ## Table of Contents
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

   ## Installation
   
   ## Usage
  
   
   ## Contributing
   
   ## Tests
   ## License
   ${license}
   ## Questions
   `

    const fs = require('fs');
    fs.writeFile('README.md', read_me, (error, data) =>
    error ? console.error(error) : console.log("file has been created")
  );
  
}

const licenseChoice =(answers)=>{

    if (answers.license === "Apache License 2.0"){
    license= "![license](https://img.shields.io/badge/license-Apache%20License%202.0-green)"
  } if (answers.license === "GNU General Public License v2.0"){
    license= "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v2.0-green)"
  } if (answers.license === "GNU General Public License v3.0"){
    license= "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)"
  } if (answers.license === "ISC License"){
    license= "![license](https://img.shields.io/badge/license-ISC%20license-green)"
  } if (answers.license === "MIT License"){
    license= "![license](https://img.shields.io/badge/license-MLT%20license-green)"
  }if (answers.license === "BLANK"){
    license=""
  }
}