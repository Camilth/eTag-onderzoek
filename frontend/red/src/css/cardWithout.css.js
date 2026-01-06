import {css} from 'lit'

export const cardWithoutCss = css`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    button {
        font-size: 1.8rem;
        width: 100%;
        color: white;
        background-color: var(--primary-color-without-cache);
        border: none;
        border-radius: 0.4rem;
        margin: 1rem 0 0.5rem;
        padding: 1rem 2rem;
        font-weight: 500;
    }

    button:hover {
        cursor: pointer;
        background-color: #e89144;
    }

    section.wrapper {
        border: 3px solid var(--primary-color-without-cache);
        background-color: #152034;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    section.summary {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
    }

    p {
        text-align: center;
        color: black;
        margin-bottom: 0;
    }

    h1 {
        text-align: center;
        border-bottom: 1px solid var(--primary-color-without-cache);
        margin: 0 -1rem 0 -1rem;
        font-size: 3rem;
        padding: 0 1.5rem 1rem 1.5rem;
    }

    .time {
        display: flex;
        justify-content: center;
        border: 1px white solid;
        color: var(--primary-color-without-cache);
        font-weight: bold;
        font-size: 2.5rem;
        margin: 0 1rem 1rem;
    }


`
