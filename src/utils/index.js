export const calculateAmount = items => {
    return Number(items
        .reduce((acc,item) => acc + item.quantity * item.price, 0)
        .toFixed(2))
}

export const clearCart = (tokenKey = "cart") => {
    if(localStorage){
        localStorage.removeItem(tokenKey)
    }
}