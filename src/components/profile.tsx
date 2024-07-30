import Image from "next/image"
import RichTextBlockRenderer from "./block-renderer"
import SocialIconComponent from "./social"

const ProfileComponent = ({ profile } : any) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="basis-full md:basis-3/4 md:order-1 order-2 justify-center md:justify-start text-center md:text-left">
                <RichTextBlockRenderer content={profile.attributes.MyIntro} />
                <div className="flex flex-row my-3 justify-center md:justify-start text-center md:text-left">
                    {profile?.attributes?.SocialMediaLinks && <SocialIconComponent social={profile?.attributes?.SocialMediaLinks} />}   
                </div> 
            </div>
            <div className="flex flex-row basis-full md:basis-1/4 justify-center md:justify-end align-middle items-center md:order-2 order-1">
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