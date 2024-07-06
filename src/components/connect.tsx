import styles from '../app/home.module.css'
import SocialIcons from "./social";

const ConnectComponent = ({ social }: any) => {

    return (
        <div id="connect">
            <hr className={`${styles.border} my-8`}/>
            <h2 className="text-neutral-400 font-bold text-3xl">let's connect</h2>
            <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
            <SocialIcons social={social} />
            </div>
        </div>
    )
}

export default ConnectComponent