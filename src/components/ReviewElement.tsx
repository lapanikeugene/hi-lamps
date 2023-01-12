import Stars from "./Stars";


const ReviewElement = (props:{stars:number,name:string,date:string, image?:string,desc:string}) =>{

    const date = new Date(props.date);
    let dateToShow =    `${(date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.`+
                        `${date.getDate()<10 ? "0"+date.getDate() : date.getDate() }.`+
                        `${date.getFullYear()}`

    return (
        <div className="tile  inline-block rounded-lg shadow-lg shadow-indigo-500/40 bg-white max-w-sm text-center xxs:my-4">
    <div className="py-3 px-2 border-b border-gray-300 flex justify-center xxs:px-0 duo:px-2">
      <Stars amount={props.stars} />
    </div>
    <div className="p-6">
    {props.image && <img className="rounded-t-lg" src={`${props.image}`} alt=""/>}

      <p className="text-gray-700 text-base mb-4">
      {props.desc}
      </p>
    </div>
    <div className="py-3 px-6 border-t border-gray-300 text-gray-600 flex justify-around gap-x-1">
     <span className="font-bold">{props.name}</span> <span>{dateToShow}</span>
    </div>
  </div>
    );


}

export default ReviewElement;