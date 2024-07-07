import styles from '../app/home.module.css'

const FooterComponent = () => {
    return (
        <footer className="w-full sticky">
            <hr className={`${styles.border} mb-8`}/>
            <p className="text-neutral-400"><a href={`${process.env.REACT_APP_BASE_URL}#about`} className="hover:text-black focus:text-black">about</a> | <a href={`${process.env.REACT_APP_BASE_URL}#time`} className="hover:text-black focus:text-black">let's talk</a> | <a href={`${process.env.REACT_APP_BASE_URL}#connect`} className="hover:text-black focus:text-black">let's connect</a> | <a href={`${process.env.REACT_APP_BASE_URL}#toolkit`} className="hover:text-black focus:text-black">the toolkit</a></p>
        </footer>
    )
}

export default FooterComponent