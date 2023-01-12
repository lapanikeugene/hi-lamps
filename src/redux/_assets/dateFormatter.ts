
/**
 * 
 * @param d any date
 * @return string of date in format needed  for Strapi
 */
const dateFormatter = (d:Date) => {
    const month = d.getMonth()+1;
    const day = d.getDate();
    const year = d.getFullYear();
    
    

    return `${year}-${month <10 ? '0'+month : month}-${day <10? "0"+day : day}`




}

export default dateFormatter;