import { getTechnology, setTechnology } from "./database.js";
const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
        setTechnology(parseInt(event.target.value))
            }
             
        }
)

export const Technologies = () => {
    let html = "<h2>Tech Options</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select an infotainment package.</option>'

    const arrayOfOptions = technology.map( (tech) => {
            return `<option value="${tech.id}">${tech.dashOptions}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}