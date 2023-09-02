import styled from 'styled-components';

export const BigContainer = styled.div`
    position: absolute;
    display: flex;
    background-color: rgb(255, 255, 255,0.1);
    border-radius: 20px;
    width: 96vw;
    height: 80vh;
    margin: 4vw 2vw;
    justify-content: space-around;
    align-items: center;
    font-size: 5vw;
    line-height: 1;
    z-index: 2;
    color: white;
    border: 1px solid grey;
`

export const Posts = styled.div`
    position: relative;
    width: 45vw;
    height: 75vh;
    background-color: rgb(255, 255, 255,0.05);
    border-radius: 20px;
    border: 1px solid grey;
    
`

export const Comments = styled.div`
    position: relative;
    width: 45vw;
    height: 74vh;
    background-color: rgb(255, 255, 255,0.05);
    border-radius: 20px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    border: 1px solid grey;
    padding: 5px;
   
`
export const PostsList = styled.div`
    height: 65vh;
    width: 45vw;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    overflow-y: scroll;

`