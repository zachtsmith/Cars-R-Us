import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRuS = () => {
    return `
        <h1>Cars-R-US</h1>

        <article class="choices">
            <section class="choices__interior options">
                ${Interiors()}
            </section>
            <section class="choices__paint options">
                ${Paints()}
            </section>
            <section class="choices__technology options">
                ${Technologies()}
            </section>
            <section class="choices__wheel options">
                 ${Wheels()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Your New Ride</button>
        </article>
                ${Orders()}
        <article class="customOrders">
            <h2>Custom Vehicle Order</h2>
        </article>` }