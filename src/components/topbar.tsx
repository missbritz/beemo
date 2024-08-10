import Link from 'next/link'
import Navigation from './navigation'

const TopBarComponent = ({ profile }: { profile: any }) => {
    return (
        <header className="w-full sticky content-center my-6">
            <div className="flex flex-row">
            <div className="basis-2/4">
                <Link href="/">
                {profile?.data?.myProfile?.data?.attributes?.MainTitle && <h1 className="font-bold text-cpink-900 text-2xl hover:rainbow-bg">{profile?.data?.myProfile?.data?.attributes?.MainTitle}</h1>}
                </Link>
            </div>
            <div className="flex flex-row basis-2/4 justify-end align-middle items-center">
                <Navigation/>
            </div> 
            </div>
        </header>
    )
}

export default TopBarComponent