export interface commentItemInterface {
    rating:number,
    desc: string,
    name:string,
    img?:string,
    date:string,
}

export default interface commentsInterface{
    comments:  commentItemInterface[],
    userRating: number,
}