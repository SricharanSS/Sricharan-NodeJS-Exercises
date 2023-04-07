import { readFile, readFileSync, writeFile} from 'fs';

// Read File 'color_palette.json' and store it a varibale
function ReadFile() {
    return new Promise( (resolve, reject) => {
        readFile("assets/color_ palette.json", "utf-8", (err, data) => {
            if(err) {
                reject("Can't Read File");
            }
            else {
                resolve(data);
            }
        });
    }).then(
        function(data) {return data},
        function(err) {return err}
    );
}

function WriteFile(data) {
    return new Promise( (resolve, reject) => {
        writeFile("assets/randomized_color_palette.json", data, "utf-8", (err) => {
            if(err) {
                reject(err);
            }
            else {
                resolve("Success");
            }
        });
    }).then(
        function(err) {return err},
        function(data) {return data}
    );
}

async function runFile() {
    let data = await ReadFile();
    let colorCodes = JSON.parse(data);


    // Create an Array for storing Random Colors
    const randomColorPalette = [];

    // Create an array for getting unique random number
    let indexArray = [];

    while(randomColorPalette.length != 5) {
        let index = Math.floor(Math.random()*colorCodes.length);
        if(indexArray.indexOf(index) === -1) {
            indexArray.push(index);
            randomColorPalette.push(colorCodes[index]);
        }
    }
   
    // Write to 'randomized_color_palette.json'
    await WriteFile(JSON.stringify(randomColorPalette));

    // Read from 'randomized_color_palette.json' and store it in a variable
    const newColorCodes = JSON.parse(readFileSync("assets/randomized_color_palette.json","utf-8"));

    // Console Log the output
    for(const element of newColorCodes) {
        console.log(element.color);
    }
}

runFile();