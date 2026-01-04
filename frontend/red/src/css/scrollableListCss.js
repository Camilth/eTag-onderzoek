import { css } from 'lit';

export const scrollableListCss = css`
  .scrollable-list {
    color: black;
    border: 1px solid #ccc;
    padding: 10px;
    width: 300px;
    max-height: 200px;
    overflow-y: auto;
    list-style: disc inside;
    background-color: #f9f9f9;
  }
`;
