import styled from 'styled-components'

const MovieCard = styled.ul`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 0 30px;

    @media screen and (min-width: 1999px){
        grid-template-columns: repeat(5, 1fr);

    }

    @media screen and (min-width: 1200px){
        grid-template-columns: repeat(6, 1fr);

    }

    .singleCard{
        min-height: 300px;
        text-align: center;
        
    }

    

    .imgContainer {
        height: 230px;
        width: 200px;
        overflow: hidden;
        border-radius: 0px 0px 20px 20px;
        display: inline-block;
        
    
    }

    .imgContainer img {
        width: 100%;
        height: 230px;
        object-fit: contain;
        background: #780206;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    }

    .innerSkew {
        display: inline-block;
        border-radius: 20px;
        overflow: hidden;
        padding: 0px;
        font-size: 0px;
        
        background: #c8c2c2;
        height: 250px;
        width: 200px;
    }

    .textContainer {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        padding: 130px 20px 20px 20px;
        border-radius: 20px;
        background: #fff;
        margin: -120px 0px 0px 0px;
        line-height: 19px;
        font-size: 14px;
        transition: all 200ms linear;
    }

    .textContainer h3 {
        margin: 20px auto 10px auto;
        color: #04bcff;
        font-size: 18px;
        max-width: 200px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: scroll;
        text-decoration: none;
        text-align: center;
        text-transform: capitalize;
        color: black;
        
    }

    .singleCard:hover .textContainer{
        box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.4);

    }

    .navLink{
        text-decoration: none;
        text-align: center;


    }

`

export default MovieCard;
