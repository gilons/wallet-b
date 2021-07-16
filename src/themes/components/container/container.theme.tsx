import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
  transition: all 0.5s 0.5s ease-in-out;
  overflow: visible;
  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.accent}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.accent}; 
}
`;
