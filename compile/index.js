var markdownInclude = require('markdown-include');
var fs = require('fs');

//Relative path to wiki directory
var wikipath = "../../ALMgithub/ALM-WP.wiki/asserts/"
var imagepath = "../asserts/"
//Copy all images
fs.readdirSync(wikipath).forEach(
    file => {
        fs.copyFileSync(wikipath + file, imagepath + file);
    }
)

markdownInclude.compileFiles("markdown.json").then(function (data) {
    console.log("Finished");
});