const IconButtonComponent = (props:any) => {
    return (
    <a href={props.link} target="_blank" className="hover:rainbow-bg">
      {props.children}
    </a>
    )
}

export default IconButtonComponent