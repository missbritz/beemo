import Link from 'next/link'
import SocialIconComponent from './social'

const TopBarComponent = ({ profile }: { profile: any }) => {
    return (
        <header className="w-full sticky content-center my-6">
            <div className="flex flex-row">
            <div className="basis-2/4">
                <Link href="/">
                {profile?.data?.myProfile?.data?.attributes?.MainTitle && <h1 className="font-bold text-cpink-900 text-2xl">{profile?.data?.myProfile?.data?.attributes?.MainTitle}</h1>}
                </Link>
            </div>
            <div className="flex flex-row basis-2/4 justify-end align-middle items-center">
                <p className="text-gray-400"><a href={`${process.env.APP_BASE_URL}#about`} className="hover:text-pink-500 focus:text-pink-500">about</a> | <a href={`${process.env.APP_BASE_URL}/notes`} className="hover:text-pink-500 focus:text-pink-500">notes</a> | <a href={`${process.env.APP_BASE_URL}/lab`} className="hover:text-pink-500 focus:text-pink-500">lab</a></p>
            </div> 
            </div>
        </header>
    )
}

export default TopBarComponent