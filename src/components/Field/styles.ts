import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
`;
export const Label = styled.Text`
  font-size: 20px;
  color: #71717a;
  font-weight: 700;
`;

export const PickerContainer = styled.View`
  width: 100%;
  background-color: #f4f4f5;
  border-radius: 20px;
  padding: 8px;
`;

export const PickerComp = styled(Picker)`
  color: #a1a1aa;
  font-size: 16px;
  font-weight: 700;
`;



