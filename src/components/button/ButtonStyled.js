import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { mobile } from '../../styles/GlobalStyleOne';
const color = "#CC9966";

export const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  cursor: pointer;
  
  ${mobile`
    
      background-color: #e0e0e0;
    
  `}

  &:hover {
    background-color: ${color};
  }
`;

styled.button.defaultProps = {
    
    borderRadius: '5px',
  };