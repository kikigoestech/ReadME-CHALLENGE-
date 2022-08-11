// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ''
    }
    return licenseLink;
}

// TODO: function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
