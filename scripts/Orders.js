import { getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js"
const buildOrderListItem = (order) => {
    const paint = getPaintColor()
    const paintChoice = paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    

    const interior = getInterior()
    const interiorChoice = interior.find(
        (interiors) => {
            return interiors.id === order.interiorId 
        }
    )
    
   
    const tech = getTechnology()
    const techChoice = tech.find(
        (technologies) => {
            return technologies.id === order.techId
        }
    )

    const wheels = getWheels()
    const wheelChoice = wheels.find(
        wheelsSelected => {
            return wheelsSelected.id === order.wheelId
        }
    )
    let totalCost = paintChoice.price + interiorChoice.price + techChoice.price + wheelChoice.price
    
    

   
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and it costs $${totalCost}.
        </li>`
        

}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   
    const orders = getOrders()
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
