import { getOrders } from "./database.js"
// export const NewOrders = () => {
//     const orders = getOrders()
//     let html = "<ul>"
//     const listItems = orders.map(buildOrderListItem)

//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }
export const Orders = getOrders()

// This function is not working, pick up here tomorrow. 
