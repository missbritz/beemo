import Link from 'next/link'
import SocialIconComponent from './social'

const TopBarComponent = ({ profile }: { profile: any }) => {
    return (
        <header className="w-full sticky content-center">
            <div className="flex flex-row">
            <div className="basis-3/4">
                <Link href="/">
                {profile?.data?.myProfile?.data?.attributes?.MainTitle && <h1 className="font-bold text-cpink-900 md:text-8xl text-5xl">{profile?.data?.myProfile?.data?.attributes?.MainTitle}</h1>}
                </Link>
            </div>
            <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <SocialIconComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks} />}
            </div> 
            </div>
            <hr className="border-b border-solid border-slate-800"/>
        </header>
    )
}

export default TopBarComponent