import styled from "styled-components"
import { ReactComponent as logoIcon } from "./Vector.svg"

export const Wrapper = styled.div`
    width: 100%;
    display: inline-block;
    background-color: #0D263B;
    color: #fff;
`

export const Nav = styled.nav`
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const Icon = styled(logoIcon)`
    margin: 14px 10px;
`

export const Logo = styled.div`
    display: inline-flex;
    align-items: center;
    user-select: none;
    >div{
        font-weight: bold;
    }
`

export const NavItems = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: inline-flex;
    column-gap: 1rem;
    cursor: default;
    >li:hover{
        color: #ccc;
        cursor: pointer;
    }
`