import React from 'react';
import { Container, Input, Label } from './styles';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

export function Amount({ value, onChange }: Props) {
    return (
        <Container>
            <Label>Digite um valor para converter em (R$):</Label>
            <Input
                placeholder="0.00"
                placeholderTextColor="#a1a1aa"
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => onChange(text)}
            />
        </Container>
    );
}
