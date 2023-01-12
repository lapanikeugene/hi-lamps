

// 
/**
 * show how many percents will save buyer.
 * @param comparePrice 
 * @param price 
 * @returns int number
 */
const percenter = (comparePrice:number,price:number)=>{

    return Math.floor(100 - price/comparePrice*100)
}


export default percenter;