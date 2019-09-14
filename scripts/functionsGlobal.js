import * as Plotty from "plotty/src/plotty";


// function for generating image from geotiff metadata
export default function PlottCanvas(canvasElement, bands, imageWidth, imageHeight, minValue, maxValue, palleteColor, noData) {

    let plot = new Plotty.plot({
        canvas: canvasElement,
        data: bands,
        width: imageWidth,
        height: imageHeight,
        domain: [minValue, maxValue],
        colorScale: palleteColor,
        noDataValue: noData
    });

    plot.render();
}


export { PlottCanvas };
