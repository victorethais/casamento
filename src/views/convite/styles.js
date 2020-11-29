import styled from 'styled-components';
import { Colors } from '../../styles';
import flor from '../../assets/flor.png';

export const Container = styled.div`
    padding-bottom: 150px;
    padding-top: 150px;
    position: relative;
    text-align: center;

    &::before,
    &::after {
        background-image: url(${flor});
        background-repeat: no-repeat;
        background-size: 310px;
        content: '';
        height: 140px;
        left: calc(50% - 155px);
        position: absolute;
        width: 310px;
    }

    &::before {
        top: -20px;
    }

    &::after {
        bottom: -20px;
    }
`;

export const Title = styled.h1`
    font-size: 56px;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 20px;
`;

export const Date = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const Local = styled.h3`
    font-size: 40px;
    margin-bottom: 12px;
`;

export const Info = styled.a`
    font-size: 20px;
    color: #b8b8b8;
`;

export const Presentear = styled.p`
    color: #b8b8b8;
    margin: 40px 0;
`;

export const Btn = styled.a`
    background-color: #ffc7cf;
    border-radius: 4px;
    color: #333;
    font-weight: 700;
    padding: 16px 28px;
    text-transform: uppercase;
`;

export const Frase = styled.div`
    background-color: ${Colors.light};
    font-family: 'PT Mono', monospace;
    font-size: 18px;
    margin-bottom: 40px;
    margin-top: 100px;
    padding: 32px 20px;
`;
