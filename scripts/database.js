const database = {
    orderBuilder: {},
    paintColor: [
        { id: 1, color: "Silver", price: 250 },
        { id: 2, color: "Midnight Blue", price: 350 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 495}
    ],
    interiorSeatType: [
        { id: 1, type: "Beige Fabric", price: 1200 },
        { id: 2, type: "Charcoal Fabric", price: 795 },
        { id: 3, type: "White Leather", price: 1800 },
        { id: 4, type: "Black Leather", price: 695 },
    ],
    technology: [
        { id: 1, dashOptions: "Basic Package (basic sound system)", price: 295 },
        { id: 2, dashOptions: "Navigation Package (includes integrated navigation controls)", price: 995 },
        { id: 3, dashOptions: "Visibility Package (includes side and rear cameras)", price: 1785 },
        { id: 4, dashOptions: "Ultra Package (includes navigation and visibility packages)", price: 2500 },
    ],
    wheels: [
        { id: 1, wheels: "17-inch Pair Radial", price: 600 },
        { id: 2, wheels: "17-inch Pair Radial", price: 800 },
        { id: 3, wheels: "18-inch Pair Spoke Silver", price: 1200 },
        { id: 4, wheels: "18-inch Pair Spoke Black", price: 1400 },
    ]
}

export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interiorSeatType.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(interior => ({...interior}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))

   
}
