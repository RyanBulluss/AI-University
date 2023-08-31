import { FaBars } from "react-icons/fa"
import SideBar from "../SideBar/SideBar"
import { useState } from "react"


export default function MobileSideBar() {
    const [showBar, setShowBar] = useState(false) 
    const [px, setPx] = useState(0);

    function toggleBar() {
        setShowBar(!showBar);
        setPx(px === 0 ? 80 : 0);
    }

    return(
        <div>
            <FaBars onClick={toggleBar} className="block md:hidden w-8 h-8 cursor-pointer hover:bg-fifth rounded" />
            {showBar &&
            <div className={`fixed transform bottom-0 top-16 pr-2 bg-third transition-transform`}>
                <SideBar />
            </div>
            }
        </div>
    )
}