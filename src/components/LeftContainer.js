import React from 'react'
import styled from 'styled-components'
import SalesforceLogo from '../image/logo214.svg'

const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: #f7f7f7;
    position: absolute;
`

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    width: 50%;
    background-color: #ffffff;
    border-radius: 0.3rem;
    border: 1px solid #A9A9A9;
    position: relative;
    top: 25%;
    left: 25%;
    padding: 30px;
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
`

const Input = styled.input`
    padding: 10px;
    border: 1px solid #A9A9A9;
    border-radius: 0.3rem;
    margin-bottom: 10px
`

const Label = styled.label`
    font-size: 12px;
    color: rgb(84, 105, 141);
    margin: 0px 0px 8px;
    line-height: inherit;
`

const Button = styled.button`
    background-color: rgb(0, 112, 210);
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    border: 0px;
    font-size: 0.8125rem;
    cursor: pointer;
    width: 100%;
    margin-top: 15px
`

const RememberDiv = styled.div`
    margin-right: auto;
    margin-top: 15px;
    display: flex;
    align-items: center
`

const CheckBox = styled.input`
    border: 1px solid #A9A9A9;
`

const CheckLabel = styled.label`
    font-size: 0.8125rem;
    margin-left: 5px;
`
const LinksDiv = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Links = styled.a`
    font-size: 0.75rem;
    color: rgb(0, 95, 178);
    text-decoration: none;
`

const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    max-width: 100px;
    max-height: 113px;
`

const LeftContainer = () => {
    return (
        <Wrapper>
            <LoginContainer>
            <Image src={SalesforceLogo} />
                <InputDiv>
                    <Label>Username</Label>
                    <Input type='text' />
                    <Label>Password</Label>
                    <Input type='password' />
                </InputDiv>
                <Button>Log In</Button>
                <RememberDiv>
                    <CheckBox type='checkbox' />
                    <CheckLabel>Remember Me</CheckLabel>
                </RememberDiv>
                <LinksDiv>
                    <Links href="#">Forgot your password</Links>
                    <Links href="#">Use custom domain</Links>
                </LinksDiv>
            </LoginContainer>
        </Wrapper>
    )
}

export default LeftContainer
