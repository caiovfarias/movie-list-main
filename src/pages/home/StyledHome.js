import styled from 'styled-components'


export const Container = styled.div`  
    
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .link{
        text-decoration: none;
    }
   
    

    h1{
        text-align: center;
        margin: 8rem 0 4rem 0;
        color: #6C63FF;
    }

    button{
        margin-top: 6rem;
    }


`
export const SubContainer = styled.div`
    display: flex;
    height: 30%;
    width: 60%;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    


    h1 {
        color: white;
    }`

export const CategoryContainer = styled.div`

    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-weight: bold;   
    

    img {
        height: 300px;
        width: 300px;
    }


    :hover{
        opacity: 0.5;
        transition: 0.3s;
    }



`

