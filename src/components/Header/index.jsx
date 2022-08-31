import { Wrapper, Nav, Icon, Logo, NavItems } from "./style"
import { ContextAPI } from "../../context"
import { useContext } from "react"

const Header = () => {
    const {setShow} = useContext(ContextAPI)
    const showSignIn = () => setShow(true)
    const showReg = () => setShow(false)

    return <>
        <Wrapper>
            <div className="toCenter">
                <Nav>
                    <Logo>
                        <Icon/>
                        <div>Houzing</div>
                    </Logo>
                    <NavItems>
                        <li>Home</li>
                        <li>Properties</li>
                        <li>Contacts</li>    
                    </NavItems>
                    <NavItems>
                        <li onClick={showSignIn}>Sign in</li>
                        <li onClick={showReg}>Registration</li>    
                    </NavItems>
                </Nav>
            </div>
        </Wrapper>
    </>
}

export default Header