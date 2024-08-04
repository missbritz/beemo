import IconButton from "./icon-button";

const SocialIconComponent = ({ social }: any) => {

    return (
        social.length && <IconButton icons={social}/>
    )
}

export default SocialIconComponent