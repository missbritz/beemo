import ConnectComponent from "./connect"
import ToolkitComponent from "./toolkit"

const FooterComponent = ({ profile }: any) => {
    return (
        <footer className="w-full pb-4">
            {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
            <div id="toolkit" className="pt-8 border-t border-solid border-slate-800">
                <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">The Toolkit</h2>
                <p className="text-gray-400 max-w-prose my-2 text-sm">Built with these swags</p>
                {profile?.data?.myProfile?.data?.attributes?.KitIcons && <ToolkitComponent icons={profile?.data?.myProfile?.data?.attributes?.KitIcons}></ToolkitComponent>}
            </div>
        </footer>
    )
}

export default FooterComponent