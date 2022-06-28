import { getWheels, setWheels } from "./database.js";
const wheelChoices = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
             setWheels(parseInt(event.target.value))
            }
              
        }
)

export const Wheels = () => {
    let html = "<h2>Wheel Options</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Pick out your wheels.</option>'

    const arrayOfOptions = wheelChoices.map( (wheels) => {
            return `<option value="${wheels.id}">${wheels.wheels}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
