import React, { useEffect, useState } from 'react';
import { Button, ButtonText, Container, Title } from './styles';
import Field, { Currency } from '../../Field';
import { Amount } from '../../Amount';
import { Result } from '../../Result';
import { getConversion, getCurrency } from '../../../api/api';
import { Alert } from 'react-native';
import { Keyboard } from 'react-native';



export function Home() {
    const [currency, setCurrency] = useState<Currency[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState<string>('');
    const [valueConversion, setValueConversion] = useState<string>('');
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        getCurrency().then((response) => {
            let currencyList: Currency[] = [];
            Object.keys(response).map((key) => {
                currencyList.push({
                    code: key,
                    name: response[key].name.split('/')[0],
                });
            });
            setCurrency(currencyList);
            setSelectedCurrency(currencyList[0].code);
        });
    }, []);

    const convert = async () => {
        if (selectedCurrency.length === 0 || valueConversion.length === 0 || isNaN(parseFloat(valueConversion))) {
            Alert.alert('Erro', 'Preencha os campos corretamente');
            return;
        }
        const response = await getConversion(selectedCurrency, valueConversion);
        let value = response[0].ask * parseFloat(valueConversion);
        setResult(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        Keyboard.dismiss();
    };
    return (
        <Container>
            <Title>Conversor de moeda</Title>
            <Field
                label="Selecione sua moeda:"
                data={currency}
                selectedCurrency={selectedCurrency}
                onChange={(value: Currency) => setSelectedCurrency(value.code)}
            />
            <Amount value={valueConversion} onChange={(text) => setValueConversion(text)} />
            <Button onPress={convert}>
                <ButtonText>Converter</ButtonText>
            </Button>
            <Result valueResult={result} />
        </Container>
    );
}
