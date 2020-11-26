import React from 'react'
import styled from 'styled-components'
const Breed = ({children}: any ) => {
    
   
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Breed

const Container = styled.div`
display: flex;
flex-direction: column;
button{
    width:120px;
    height:60px;
    margin-left:120px;
    margin-top: 20px;
    background-color: #f15a25;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5%;
    border: none;
}
`