import { SiRailway, SiApollographql, SiStrapi, SiGraphql } from "react-icons/si";
import { FaGithub, FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import IconButtonComponent from "./icon";

const ToolkitComponent = ({ icons }: any) => {
    const GetIcon = ({ icon }: any) => {
        switch (icon) {
            case 'Railway':
                return <SiRailway size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'Github':
                return <FaGithub size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'AWS':
                return <FaAws size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'Apollo':
                return <SiApollographql size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'GraphQL':
                return <SiGraphql size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'NextJs':
                return <RiNextjsFill size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'Strapi':
                return <SiStrapi size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'TailwindCSS':
                return <RiTailwindCssFill size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
        }
    }
    return (
        <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
            {icons.length && icons.map((icon:any) => {
                return (
                    <IconButtonComponent link={icon.Url} key={`icon-${icon.Label}`}>
                        <GetIcon icon={icon.Label}/>
                    </IconButtonComponent> 
                )
            })}
        </div>
    )
}

export default ToolkitComponent