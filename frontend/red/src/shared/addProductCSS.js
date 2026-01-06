import {css} from 'lit'

export const AddProductCSS = css`
:host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}
    
    button {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        border-radius: 0.8rem;
        border: none;
        background: linear-gradient(to right, var(--primary-color-without-cache), var(--primary-color-with-cache));
    }
    
    .time {
        display: flex;
        justify-content: center;
        border: 1px white solid;
    }


`
