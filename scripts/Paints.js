import { getPaintColor, setPaintColor } from "./database.js";
const paints = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColor(parseInt(event.target.value))
            }
             
        }
)

export const Paints = () => {
    let html = "<h2>Paint Options</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color.</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}