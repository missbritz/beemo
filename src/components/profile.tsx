import Image from "next/image"

const ProfileComponent = ({ profile } : any) => {
    console.log(profile)
    return (
        <div className="flex flex-row">
            <div className="basis-3/4">
                <p className="text-neutral-600 text-sm">Hi!  I'm Britta Oblan, I am an Application Developer from Cebu, Philippines, living in Singapore specialising in Front End Technology.  I am UI/UX designer turned developer and working my way to be a Fullstack Developer. I like everything tech, finance, health and fitness.</p>
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