import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #29292E;





`;

export const Logo = styled.Image`
padding: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
    padding: 20px;
`;


export const BackIcon = styled(CaretLeft)`

    size: 50;
    color: white;
    

`;