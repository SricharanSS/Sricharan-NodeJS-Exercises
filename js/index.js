const http = require("http");
const fs = require("fs");

const colorPaletteFile = 'assets/color_palette.json';
const randomizedColorPaletteFile = 'assets/randomized_color_palette.json';

http.createServer(function(req,res,err) {
    // Handling Server errors
    if(err) {
        console.log("Server Connection Problem : ",err);
    }
    else {
        // Reading the file color_palette.json
        const colorCodes = JSON.parse(fs.readFileSync(colorPaletteFile,"utf-8", (err) => {
            if(err) {
                console.log("Cannot Read from File");
            }
        }));

        // Checking if the file has enough sufficiant data
        if(colorCodes.length < 5) {
            console.log("Not enough data in the file : ",colorPaletteFile);
        }
        else {
            let randomColorPalette = [];
            let indexArray = [];
            let count = 0;
            while(count < 5) {
                let index = Math.floor(Math.random()*colorCodes.length);
                if(indexArray.indexOf(index) === -1) {
                    count++;
                    indexArray.push(index);
                    randomColorPalette.push(colorCodes[index]);
                }
            }
        
            fs.writeFileSync(randomizedColorPaletteFile, JSON.stringify(randomColorPalette),(err)=> {
                if(err) {
                    console.log("Cannot Write to File");
                }
            });
    
            const newColorCodes = JSON.parse(fs.readFileSync(randomizedColorPaletteFile,"utf-8"));
       
            res.write("<h1>New Color Codes</h1>");
            res.write(JSON.stringify(newColorCodes));
            // for(const element of newColorCodes) {
            //     res.write("<h1 style='text-align: center; color : "+element.code.hex+"; background-color: #000; border-radius: 5px;'> Color - "+element.color+"</h1>");
            // }
        }
    }
}).listen(4002);
