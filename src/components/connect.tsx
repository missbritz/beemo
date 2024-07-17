import styles from '../pages/home.module.css'
import Emoji from './emoji';
import SocialIconComponent from "./social";

const ConnectComponent = ({ social }: any) => {
    return (
        <div id="connect">
            <hr className={`${styles.border} my-8`}/>
            <h2 className="text-neutral-900 font-bold text-3xl">let's connect</h2>
            <p className="text-neutral-600 max-w-prose my-2">Say <Emoji symbol="👋" /> at <a href="mailto:hello@britzoblan.com" className="text-neutral-600 hover:text-black">hello<strong>[at]</strong>britzoblan.com</a></p>
            <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
                <SocialIconComponent social={social} />
            </div>
        </div>
    )
}

export default ConnectComponent