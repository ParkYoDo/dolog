import styled from 'styled-components';

export const Input = styled.input<{ prev: string }>`
  display: none;

  &:checked + label {
    background-color: rgba(109, 104, 107);
  }

  &:checked + label::before {
    content: '☀️';
    color: #fff;
    left: 15px;
  }

  &:checked + label::after {
    left: calc(100% - 42.5px);
  }
`;

export const Label = styled.label<{ next: string }>`
  display: block;
  position: relative;
  width: 100px;
  height: 45px;
  background-color: beige;
  border-radius: 60px;
  transition: background 0.4s;

  &::before {
    content: '🌙';
    font-size: 24px;
    position: absolute;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.4s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 2.5px;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: pink;
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
  }
`;
