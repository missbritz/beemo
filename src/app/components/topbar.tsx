import Link from 'next/link'
import styles from '../home.module.css'
import SocialIconComponent from './social'
import ThemeToggler from './theme-toggler'

const TopBarComponent = ({ profile }: { profile: any }) => {
    return (
        <header className="w-full sticky content-center">
            <div className="flex flex-row">
            <div className="basis-3/4">
                <Link href="/">
                {profile?.data?.myProfile?.data?.attributes?.MainTitle && <h1 className={`${styles.headerTitle} text-black font-bold`}>{profile?.data?.myProfile?.data?.attributes?.MainTitle}</h1>}
                </Link>
            </div>
            <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <SocialIconComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks} />}
            </div> 
            </div>
            <hr className={`${styles.border}`}/>
        </header>
    )
}

export default TopBarComponent