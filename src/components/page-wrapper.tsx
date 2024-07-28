import FooterComponent from "./footer";
import TopBarComponent from "./topbar";

export default function PageWrapper ({ profile, children }: any) {
    return (
        <main className="w-full flex flex-col justify-center items-center min-h-screen text-slate-500">
            <div className="border-b border-solid border-slate-800 w-full flex flex-col justify-center items-center px-6 md:px-8">
                <div className="max-w-5xl md:w-7/12 w-full justify-center">
                    {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
                </div>
            </div>
            <div className="border-b border-solid border-slate-800 w-full flex flex-col justify-center items-center bg-darkBodyImg px-6 md:px-8">
                <div className="max-w-5xl md:w-7/12 sm:w-full">
                    <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-8rem)] md:h-[calc(100vh-11rem)] scroll-smooth">
                    {children}
                    </section>
                    <FooterComponent/>
                </div>
            </div>
        </main>
    )
}