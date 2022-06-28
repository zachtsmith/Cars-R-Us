import { getInterior, setInterior } from "./database.js";

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
            }
            
        }
)

export const Interiors = () => {
    let html = "<h2>Interior Options</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package.</option>'

    const arrayOfOptions = interior.map( (inside) => {
            return `<option value="${inside.id}">${inside.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
