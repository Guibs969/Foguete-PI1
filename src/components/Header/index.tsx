import { Container, Logo, BackIcon, BackButton} from "./styles";

import logoImg from "../../../assets/images/icon.png";

import { useNavigation } from '@react-navigation/native';
import { Home } from "@/src/screens/Home";


type Props = {
    showBackButton: boolean;
    onPress?: () => void;
  };


export function Header({ showBackButton = false }: Props) {
 const navigation = useNavigation();

        
    function handleBack(){
        
        navigation.navigate('Home');


    }


    return (
    <>
        <Container>
            { showBackButton &&
            <BackButton onPress={handleBack}>

                <BackIcon/>


            </BackButton>
            }


            <Logo source={  logoImg } />


        </Container>
     </>


    );



} 