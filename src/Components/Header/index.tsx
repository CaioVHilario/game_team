import { BackBUtton, BackIcon, Container, Logo } from './styles';
import logoImage from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation();

    function HandleGoToBack() {
        navigation.navigate('groups');
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackBUtton onPress={HandleGoToBack}>
                    <BackIcon />
                </BackBUtton>
            }

            <Logo source={logoImage} />
        </Container>
    )
}