import styles from '../app/home.module.css'
import SocialIconComponent from './social'

const TopBarComponent = ({ profile }: { profile: any }) => {
    return (
        <header className="w-full sticky content-center">
            <div className="flex flex-row">
            <div className="basis-3/4">
                {profile?.data?.myProfile?.data?.attributes?.MainTitle && <h1 className={`${styles.headerTitle} text-black font-bold`}>{profile?.data?.myProfile?.data?.attributes?.MainTitle}</h1>}
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