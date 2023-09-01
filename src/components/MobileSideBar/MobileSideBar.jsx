import { FaBars } from "react-icons/fa"
import SideBar from "../SideBar/SideBar"
import { useState } from "react"


export default function MobileSideBar() { 
    const [show, setShow] = useState(false);

    function toggleBar() {
        setShow(!show);
    }

    return(
        <div className="md:hidden">
            <FaBars onClick={toggleBar} className="block md:hidden w-8 h-8 cursor-pointer hover:bg-fifth rounded" />
            <div onClick={() => setShow(false)}  className={`fixed transform ${show ? 'translate-x-0' : '-translate-x-24'} bottom-0 top-16 pr-2 bg-third transition-transform`}>
                <SideBar />
            </div>
        </div>
    )
}