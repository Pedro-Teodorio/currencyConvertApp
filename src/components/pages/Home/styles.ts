import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  background-color: #fafafa;
  padding: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #0ea5e9;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #10b981;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
