import { visuallyHidden } from "@style-fragments/visually-hidden";
import styled from "styled-components";

export const Input = styled.input.attrs({ type: "checkbox" })`
  ${visuallyHidden}
`;

export const Label = styled.label`
display: block;
margin-bottom: 0.5em;
  padding-left: 1.2em;
`;
export const Mark = styled.span`
position: absolute;
margin-top: 0.2em;
margin-left: -1em;
width: 0.6em;
height: 0.6em;
overflow: hidden;
border-radius: 0.05em;
background-color: white;
background-repeat: no-repeat;
background-position: 50% 50%;
box-shadow: 0 0 0 0.1em #4A90E2;`;
