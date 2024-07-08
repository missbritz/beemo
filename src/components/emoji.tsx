const Emoji = (props:any) => (
    <span role="img" aria-label={props.symbol}>{props.symbol}</span>
);

export default Emoji