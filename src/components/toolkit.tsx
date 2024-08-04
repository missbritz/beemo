import IconButton from "./icon-button";

const ToolkitComponent = ({ icons }: any) => {

    return (
        <div className="flex flex-row basis-1/3 justify-start align-middle items-center pb-10">
            {icons.length && <IconButton icons={icons}/>}
        </div>
    )
}

export default ToolkitComponent