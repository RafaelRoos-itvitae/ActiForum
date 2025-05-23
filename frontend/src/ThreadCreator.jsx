import { IconButton, Icon, TextField } from "actify"

function ThreadCreator() {
    return(
        <>
        <div className="flex justify-center">
            <div className="text-xl self-center">Create a new Thread</div>
        </div>
        <TextField label="Title" type="textarea" style={{height: '25px'}}/>    
        <TextField variant="outlined" label="Message" type="textarea" />
        <div className="flex justify-end">
            <IconButton><Icon>send</Icon></IconButton>
        </div>
        </>
    )
}
export default ThreadCreator