import { Container, Logo, BackIcon, BackButton} from "./styles";

import logo from "../../../assets/images/logo.png";

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


         


        </Container>
     </>


    );



} 