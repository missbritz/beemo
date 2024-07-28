const FooterComponent = () => {
    return (
        <footer className="w-full sticky">
            <hr className="mb-4 border-b border-solid border-slate-800"/>
            <p className="text-gray-400"><a href={`${process.env.APP_BASE_URL}#about`} className="hover:text-pink-500 focus:text-pink-500">about</a> | <a href={`${process.env.APP_BASE_URL}#talk`} className="hover:text-pink-500 focus:text-pink-500">let's talk</a> | <a href={`${process.env.APP_BASE_URL}#connect`} className="hover:text-pink-500 focus:text-pink-500">let's connect</a> | <a href={`${process.env.APP_BASE_URL}#toolkit`} className="hover:text-pink-500 focus:text-pink-500">the toolkit</a></p>
        </footer>
    )
}

export default FooterComponent