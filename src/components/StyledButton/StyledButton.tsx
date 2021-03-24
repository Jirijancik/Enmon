import styled, {css} from 'styled-components';

interface IStyledButtonProps {
  readonly isDisabled?: boolean;
}

const buttonLoadingStyle = css`
  pointer-events: none;
  filter: grayscale(0.75);
  user-select: none;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: #ff69b4;
  color: white;
  font-weight: 600;
  line-height: 32px; 
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 250ms ease 50ms;
  border: none;
  white-space: nowrap;
  padding: 15px 25px;
  font-size: 1.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isDisabled }) => isDisabled && buttonLoadingStyle}
  cursor: pointer;
  &:hover{
    filter: grayscale(.25);
  }
`;
