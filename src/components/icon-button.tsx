import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";
import { SiRailway, SiApollographql, SiStrapi, SiGraphql } from "react-icons/si";
import { FaGithub, FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import RainbowIcon from "./rainbow-icon";

const IconButtonComponent = ({icons}: any) => {


  const GetIcon = ({ icon }: any) => {
    switch (icon) {
        case 'LinkedIn':
            return <AiFillLinkedin size="1.7em" className={`p-0.5 text-gray-400 rainbow-gradient-LinkedIn`} style={{ transition: 'fill 0.3s ease'}}/>
        case 'Github':
            return <AiOutlineGithub size="1.7em" className={`p-0.5 text-gray-400 rainbow-gradient-Github`} style={{ transition: 'fill 0.3s ease'}}/>
        case 'Instagram':
            return <AiFillInstagram size="1.7em" className={`p-0.5 text-gray-400 rainbow-gradient-Instagram`} style={{ transition: 'fill 0.3s ease'}}/>
        case 'Railway':
            return <SiRailway size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-Railway" style={{ transition: 'fill 0.3s ease'}}/>
        case 'Github':
            return <FaGithub size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-Github" style={{ transition: 'fill 0.3s ease' }}/>
        case 'AWS':
            return <FaAws size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-AWS" style={{ transition: 'fill 0.3s ease' }}/>
        case 'Apollo':
            return <SiApollographql size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-Apollo" style={{ transition: 'fill 0.3s ease' }}/>
        case 'GraphQL':
            return <SiGraphql size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-GraphQL" style={{ transition: 'fill 0.3s ease' }}/>
        case 'NextJs':
            return <RiNextjsFill size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-NextJs" style={{ transition: 'fill 0.3s ease' }}/>
        case 'Strapi':
            return <SiStrapi size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-Strapi" style={{ transition: 'fill 0.3s ease'}}/>
        case 'TailwindCSS':
            return <RiTailwindCssFill size="1.7em" className="p-0.5 text-gray-400 rainbow-gradient-TailwindCSS" style={{ transition: 'fill 0.3s ease' }}/>

    }
  }

  return (
        icons.length && icons.map((icon:any) => {
            return (
              <a href={icon.Url} target="_blank">
                <GetIcon icon={icon.Label}/>
                <RainbowIcon iconId={icon.Label}/>
              </a>
            )
        })
    )
  
}

export default IconButtonComponent