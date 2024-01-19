import styled from 'styled-components';

export const Input = styled.input`
  display: none;
  //background
  &:checked + label {
    background-color: rgba(109, 104, 107);
  }

  //left
  &:checked + label::before {
    content: '';
    left: 0;
    width: fit-content;
  }

  //circle
  &:checked + label::after {
    content: '🌕';
    left: calc(100% - 30px);
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  background-color: white;
  width: 72px;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 60px;
  cursor: pointer;

  // right
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  //circle
  &::after {
    content: '☀️';
    position: absolute;
    left: 4px;
    transition: all 0.25s ease-in-out;
  }
`;
