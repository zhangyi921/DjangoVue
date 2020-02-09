// delete front end files in django if exist
// copy build files in dist to django

const path = require('path');
const fs = require('fs');

var folders = ['css', 'img', 'js']

folders.forEach((folder)=>{

    var directoryPath = path.join(__dirname, '../FrontEnd/'+folder);
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            console.log(file, "deleted!");
            fs.unlinkSync("../FrontEnd/"+folder+"/" + file)
        });
    });

    var directoryPath = path.join(__dirname, 'dist/'+folder);
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            fs.copyFile('dist/'+folder+"/" + file, '../FrontEnd/'+folder+"/" + file, (err) => {
                if (err) throw err;
                console.log(file, "was copied to Django!");
            });
        });
    });
} )



// index.html
fs.unlinkSync("../FrontEnd/templates/index.html")

fs.copyFile('dist/index.html', '../FrontEnd/templates/index.html', (err) => {
    if (err) throw err;
    console.log("index.html was copied to Django!");
});