import FooterComponent from "./footer";
import TopBarComponent from "./topbar";

export default function PageWrapper ({ profile, children }: any) {
    return (
        <div className="px-6 md:px-8 flex flex-col justify-center items-center min-h-screen text-slate-500">
            <main className="max-w-5xl md:w-7/12 sm:w-full">
                {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
                <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-10rem)] pb-8 scroll-smooth">
                {children}
                </section>
                <FooterComponent/>
            </main>
      </div>
    )
}