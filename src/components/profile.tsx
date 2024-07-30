import Image from "next/image"
import RichTextBlockRenderer from "./block-renderer"

const ProfileComponent = ({ profile } : any) => {
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <RichTextBlockRenderer content={profile.attributes.MyIntro} />
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