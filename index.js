const inquirer = require("inquirer")
const {Circle,Square,Triangle} = require("./lib/shapes")
const fs = require("fs")

const promptquestions = [
    {
        type: "list",
        message: "What shape would you like?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape"
    },
    {
        type: "input",
        message: "What color is your shape?",
        name: "shapecolor"
    },
    {
        type: "input",
        message: "What text do youn want with your shape?",
        name: "shapetext"
    },
    {
        type: "input",
        message: "What color do you want your text to be?",
        name: "textcolor"
    }
];

inquirer.prompt(promptquestions).then (res => {
    let shape;
    if(res.shape==="Circle"){
        shape=new Circle(res.shapecolor,res.shapetext,res.textcolor)
    };
    if(res.shape==="Square"){
        shape=new Square(res.shapecolor,res.shapetext,res.textcolor)
    };
    if(res.shape==="triangle"){
        shape=new Triangle(res.shapecolor,res.shapetext,res.textcolor)
    };
    fs.writeFileSync("./examples/logo.svg",shape.render())
    console.log("Generated logo.svg")
})