import IconButtonComponent from "./icon-button";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function () {
    return (
        <>
            <MdOutlineLightMode className="text-2xl text-neutral-400 hover:text-black focus:text-black" />
            <MdOutlineDarkMode className="text-2xl text-neutral-400 hover:text-black focus:text-black"/>
        </>
    )
}