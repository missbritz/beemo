import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";

const SocialIconComponent = ({ social }: any) => {
    const SocialMedia = (props:any) => {
        return (
        <a href={props.link} target="_blank" className="text-gray-400 hover:rainbow-bg">
          {props.children}
        </a>
        )
    }

    const GetIcon = ({ icon }: any) => {
        switch (icon) {
            case 'LinkedIn':
                return <AiFillLinkedin size="1.7em" className="p-0.5"/>
            case 'Github':
                return <AiOutlineGithub size="1.7em" className="p-0.5"/>
            case 'Instagram':
                return <AiFillInstagram size="1.7em" className="p-0.5"/>
        }
    }

    return (
        social.length && social.map((icon:any) => {
            return <SocialMedia link={icon.Url}><GetIcon icon={icon.Label}/></SocialMedia> 
        })
    )
}

export default SocialIconComponent