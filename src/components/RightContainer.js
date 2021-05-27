import React from 'react'
import styled from 'styled-components'
import SalesforceLogo from '../image/logo214.svg'

const Wrapper = styled.div`
    height: 100vh;
    width: 50vw;
    margin-left: auto
`

const RightContainer = () => {
    return (
        <Wrapper>
            <img style={{width: '100%', height: '100%'}} src={SalesforceLogo} />
        </Wrapper>
    )
}

export default RightContainer
