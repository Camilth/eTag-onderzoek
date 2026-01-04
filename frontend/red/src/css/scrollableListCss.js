import { css } from 'lit';

export const scrollableListCss = css`
    .scrollable-list {
        color: black;
        border: 1px solid #ccc;
        width: 300px;
        max-height: 400px; /* iets groter voor scrollruimte */
        overflow-y: auto;
        list-style: none;
        background-color: #f9f9f9;
        padding: 0; /* virtualizer werkt beter zonder padding */
    }

    .card {
        padding: 8px 12px;
        border-bottom: 1px solid #ddd;
        background-color: white;
        box-sizing: border-box;
    }
`;
