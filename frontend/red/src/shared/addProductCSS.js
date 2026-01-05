import {css} from 'lit'

export const cardCss = css`
:host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
    
    button {
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }
    
    section {
        border: 2px solid red;
        padding: 10rem;
    }
    
    .time {
        display: flex;
        justify-content: center;
        border: 1px white solid;
    }


`
