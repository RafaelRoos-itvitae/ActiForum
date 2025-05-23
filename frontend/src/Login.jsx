import { TextField, Icon } from "actify"

function Login() {
    return(
        <>
        <form className="grid-flow-row">
        <TextField label="Email" suffixText="@adaptio.corp" leadingIcon={<Icon>email</Icon>}/>
        <TextField label="Password" leadingIcon={<Icon>lock</Icon>}/>
        </form>
        </>
    )
}
export default Login