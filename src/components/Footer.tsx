import { useState } from 'react';

const Footer = () => {
    const [date,setDate] = useState(new Date().getFullYear());


    return (
        <div className="bg-slate-900 flex justify-center w-screen h-14 p-5 text-white">
       <a href="http://hi-lamps.com/" target={"_blank"}>hi-lamps</a> © 2022-{date}
        </div>
    )
}


export default Footer