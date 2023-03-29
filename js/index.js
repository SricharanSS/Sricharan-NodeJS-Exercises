import { readFileSync, writeFileSync } from 'fs';

const colorCodes = JSON.parse(readFileSync("assets/color_ palette.json","utf-8"));
const randomColorPalette = [];
let indexArray = [];
for(let i=0; i<5; i++) {
    let index = Math.floor(Math.random()*colorCodes.length);
    if(indexArray.indexOf(index) === -1) {
        indexArray.push(index);
        randomColorPalette.push(colorCodes[index]);
    }
}
    
writeFileSync("assets/randomized_color_palette.json", JSON.stringify(randomColorPalette));

const newColorCodes = JSON.parse(readFileSync("assets/randomized_color_palette.json","utf-8"));
for(const element of newColorCodes) {
    console.log(element.color);
}