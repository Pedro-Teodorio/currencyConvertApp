import React from 'react';
import { Container, ContainerLabel, Input, Label } from './styles';

type Props = {
    valueResult: string;
}
export function Result({ valueResult }: Props) {
    return (
        <Container>
            <ContainerLabel>
                <Label>
                    Resultado
                </Label>
                <Label>
                    BRL
                </Label>
            </ContainerLabel>
            <Input
                placeholder="0.00"
                placeholderTextColor="#a1a1aa"
                editable={false}
                value={valueResult}
            />
        </Container>
    );
}
