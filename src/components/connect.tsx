import Emoji from './emoji';
import SocialIconComponent from "./social";

const ConnectComponent = ({ social }: any) => {
    return (
        <div id="connect" className="mt-8 py-8 border-t border-solid border-slate-800">
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Let's Connect</h2>
            <p className="text-gray-400 max-w-prose my-2">Say <Emoji symbol="👋" /> at <a href="mailto:hello@britzoblan.com" className="text-gray-400 hover:text-pink-500 focus:text-pink-500">hello<strong>[at]</strong>britzoblan.com</a></p>
            <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
                <SocialIconComponent social={social} />
            </div>
        </div>
    )
}

export default ConnectComponent