import Image from "next/image"
import RichTextBlockRenderer from "./block-renderer"
import SocialIconComponent from "./social"

const ProfileComponent = ({ profile } : any) => {
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <RichTextBlockRenderer content={profile.attributes.MyIntro} />
                <p className="text-gray-400"><a href={`${process.env.APP_BASE_URL}#about`} className="hover:text-pink-500 focus:text-pink-500">about</a> | <a href={`${process.env.APP_BASE_URL}#talk`} className="hover:text-pink-500 focus:text-pink-500">let's talk</a> | <a href={`${process.env.APP_BASE_URL}#connect`} className="hover:text-pink-500 focus:text-pink-500">let's connect</a> | <a href={`${process.env.APP_BASE_URL}#toolkit`} className="hover:text-pink-500 focus:text-pink-500">the toolkit</a></p>
                {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <SocialIconComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks} />}   
            </div>
            <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                <Image
                    src="/assets/britta oblan - software engineer - PH.jpg"
                    width={100}
                    height={100}
                    alt="Britta Oblan - Software Engineer from PH"
                    style={{
                    borderRadius: '50px',
                    border: '1px solid #ffffff',
                    margin: '20px 0 20px 20px',
                    justifyContent: 'flex-end'
                    }}
                />
            </div>
        </div>
    )
}

export default ProfileComponent