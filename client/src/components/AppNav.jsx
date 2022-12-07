import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const AppNav= ()=>{
    return(
        <Navbar>
            <Nav>
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/#/signUp" >Sign Up</Nav.Link>
                <Nav.Link href='/#/signIn' >Sign In</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default AppNav