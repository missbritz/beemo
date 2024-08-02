import FooterComponent from "./footer";
import TopBarComponent from "./topbar";

export default function PageWrapper ({ profile, children }: any) {
    return (
        <main className="w-full flex flex-col justify-center items-start text-slate-500">
            <div className="border-b border-solid border-slate-800 w-full flex flex-col justify-center items-center px-6 md:px-8 sticky top-0 left-0 bg-darkImg z-50">
                <div className="max-w-5xl md:w-7/12 w-full justify-center">
                    {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center px-6 md:px-8 overflow-y-auto scroll-smooth">
                <div className="max-w-5xl md:w-7/12 w-full">
                    <section id="scroll-container" className="w-full">
                    {children}
                    </section>
                    <FooterComponent profile={profile}/>
                </div>
            </div>
        </main>
    )
}