import { CarsRuS } from "./Cars-R-Us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRuS()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
 
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})