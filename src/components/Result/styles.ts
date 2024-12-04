import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
`;

export const ContainerLabel = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #71717a;
  font-weight: 600;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #f4f4f5;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #09090b;
`;
