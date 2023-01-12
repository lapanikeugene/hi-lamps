import  useShowModal from "../hooks/modalHooks"
import { MODALS } from "../modals/modalsTypes"




const TopMenu = () => {
    const [openModalWin] = useShowModal();
    const showModal =  (mode:string) => (e:any)=>{
        
        openModalWin(mode);
    }
    return(<div className="transition ease-in-out delay-150 w-100 flex justify-center gap-x-5 text-gray-900 uppercase text-sm font-bold my-6 hover:text-amber-600 duration-200">
        <span className="cursor-pointer" onClick={showModal(MODALS.CONTACT)}>Contact</span>
    </div>)
}


export default TopMenu