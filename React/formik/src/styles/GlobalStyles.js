import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
    --white: #fff;
    --background: #000;
    --primary: #4F46E5;
    --error: #B91C1C;
    --gray: #6B7280
 }

 body{
    margin: 0;
    padding: 0;
    background: var(--background);
    color: var(--white);
    font-family: 'Montserrat', sans-serif; 
    overflow-x: hidden;
   }
`;

export const Wrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
