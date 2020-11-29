import React from 'react';

import {
    Btn,
    Container,
    Date,
    Frase,
    Info,
    Local,
    Presentear,
    Text,
    Title,
} from './styles';

export default function Convite() {
    return (
        <Container>
            <Title>Thaís & Victor</Title>

            <Text>
                Juntamente com seus pais convidam para a cerimônia do nosso
                casamento
            </Text>

            <Date>
                09 de Janeiro de 2021 <br /> às 18hs
            </Date>

            <Local>Buffet Green House</Local>
            <Info href="https://goo.gl/maps/gg772aMvMvVUvRZu6" target="blank">
                Rua Bento de Abreu, 45 - Boqueirão, Santos - SP
            </Info>

            <Presentear>
                Gostaria de nos presentear? Acesse no lista abaixo.
            </Presentear>

            <Btn href="!#">Lista de presentes</Btn>

            <Frase>
                "Para sermos felizes precisamos de amor, família e amigos.
                <br />
                <br />
                Amor nós temos, família formaremos e amigos são vocês!"
            </Frase>
        </Container>
    );
}
