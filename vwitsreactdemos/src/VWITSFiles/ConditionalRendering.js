function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign in.</h1>;
}
/*
Conditional Rendering:::
Greeting component that displays either 
of these components depending on whether a user is logged in:
*/

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    else {
        return <GuestGreeting />;
    }

}