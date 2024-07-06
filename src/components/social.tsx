import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";

const SocialIcons = ({ social }: any) => {

    const SocialMedia = (props:any) => {
        return (
        <a href={props.link} target="_blank">
          {props.children}
        </a>
        )
    }

    const GetIcon = (icon: any) => {
        switch (icon) {
            case 'LinkedIn':
                return <AiFillLinkedin size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'Github':
                return <AiOutlineGithub size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
            case 'Instagram':
                return <AiFillInstagram size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/>
        }
    }

    return (
        social.length && social.map((icon:any) => {
            return <SocialMedia link={icon.url}><GetIcon icon={icon.icon}/></SocialMedia> 
        })
    )
}

export default SocialIcons