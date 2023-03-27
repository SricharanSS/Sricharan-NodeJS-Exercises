const http = require("http");
const fs = require("fs");
const randomIndex = require("random-index");

http.createServer(function(req,res,err) {
    const colorCodes = JSON.parse(fs.readFileSync("assets/color_ palette.json","utf-8", (err) => {
        if(err) {
            console.log("Cannot Read from File");
        }
    }));
    const randomColorPalette = [];
    let indexArray = [];
    let count = 0;
    while(count < 5) {
        let index = randomIndex({min:0, max:colorCodes.length});
        if(indexArray.indexOf(index) === -1) {
            count++;
            indexArray.push(index);
            randomColorPalette.push(colorCodes[index]);
        }
    }
    
    fs.writeFileSync("assets/randomized_color_palette.json", JSON.stringify(randomColorPalette),(err)=> {
        if(err) {
            console.log("Cannot Write to File");
        }
    });

    const newColorCodes = JSON.parse(fs.readFileSync("assets/randomized_color_palette.json","utf-8"));
    for(const element of newColorCodes) {
        res.write("<h1 style='text-align: center; color : "+element.code.hex+"; background-color: #000; border-radius: 5px;'> Color - "+element.color+"</h1>");
    }

    res.end();
}).listen(4002);