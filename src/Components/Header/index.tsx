import { BackBUtton, BackIcon, Container, Logo } from './styles';
import logoImage from '../../assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props){
    return(
        <Container>
            {
                showBackButton &&
                <BackBUtton>
                    <BackIcon />
                </BackBUtton>
            }
            
            <Logo source={logoImage}/>
        </Container>
    )
}