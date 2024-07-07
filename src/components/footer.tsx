import styles from '../app/home.module.css'

const FooterComponent = () => {
    return (
        <footer className="w-full sticky">
            <hr className={`${styles.border} mb-8`}/>
            <p className="text-neutral-400"><a href="#about" className="hover:text-black focus:text-black">about</a> | <a href="#talk" className="hover:text-black focus:text-black">let's talk</a> | <a href="#connect" className="hover:text-black focus:text-black">let's connect</a> | <a href="#toolkit" className="hover:text-black focus:text-black">the toolkit</a></p>
        </footer>
    )
}

export default FooterComponent