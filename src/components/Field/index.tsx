import React from 'react';
import { Container, Label, PickerComp, PickerContainer } from './styles';
import { Picker } from '@react-native-picker/picker';


export type Currency = {
    code: string;
    name: string;
}
type Props = {
    label: string;
    data: Currency[];
    selectedCurrency: string;
    onChange: (value: Currency) => void;
}


export default function Field({ label, data, selectedCurrency, onChange }: Props) {

    return (
        <Container>
            <Label>{label}</Label>
            <PickerContainer>
                <PickerComp
                    selectedValue={selectedCurrency}
                    onValueChange={(itemValue) => { onChange(data.find((item) => item.code === itemValue) as Currency); }}
                    dropdownIconColor="#7dd3fc"
                >
                    {data.map((item) => (
                        <Picker.Item key={item.code} label={`${item.code} - ${item.name}`} value={item.code} />
                    ))}
                </PickerComp>
            </PickerContainer>
        </Container>
    );
}
