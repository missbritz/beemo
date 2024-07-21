const IconButtonComponent = (props:any) => {
    return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
    )
}

export default IconButtonComponent