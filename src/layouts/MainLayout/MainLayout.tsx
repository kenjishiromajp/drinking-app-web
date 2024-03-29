import { Container, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../../components/Header/Header';

interface MainLayoutProps {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <VStack bg="#f44336" spacing={0} flexDirection="column" minHeight="100vh">
      <Header width="100%" />
      <Container display="flex" flexDirection="column" flex="1">
        {children}
      </Container>
    </VStack>
  );
}

export default MainLayout;
