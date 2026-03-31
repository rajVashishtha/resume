const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync("Raj Vashisht's resume.pdf");

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_text.txt', data.text);
}).catch(function(error){
    console.log("Error reading pdf", error);
});
