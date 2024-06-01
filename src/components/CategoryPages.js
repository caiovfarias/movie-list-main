import styled from 'styled-components'

export const Header = styled.div`

display: flex;
align-items: center;
justify-content: space-around;

.category-img{
        height: 200px;
        width: 200px;
    }

    h1{
        text-align: center;
        margin: 8rem 0;
        color: white;
    }

    button{
        height: 50px;
        width: 150px;
    }

`

export const Container = styled.div`  

    display: flex;
    flex-direction: column;


`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;

    button{
        height: 50px;
        width: 300px;
    }
`