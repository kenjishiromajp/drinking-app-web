import { VStack, Text, Alert, useToast } from '@chakra-ui/react';
import CardsForm from '../../components/CardForm/CardForm';
import useCreateCard from '../../hooks/useCreateCard';
import MainLayout from '../../layouts/MainLayout/MainLayout';

function RegisterCardPage() {
  const [createCard, { loading, error }] = useCreateCard();
  const toast = useToast();
  return (
    <MainLayout>
      <VStack spacing={4} align="stretch">
        <Text
          as="h1"
          fontSize="4xl"
          textAlign="center"
          marginBottom="5"
          className="cursive"
          fontWeight={700}
          color="white"
          textShadow="4px 4px #ec38bc, 8px 8px #7303c0"
          transform="skewY(-2deg)"
        >
          Register your players
        </Text>
        {error && <Alert>{error.cause?.toString()}</Alert>}
        <CardsForm
          loading={loading}
          onSubmit={(props, reset) => {
            createCard({ variables: { createCardInput: props } }).then(() => {
              toast({
                title: 'Card inserted.',
                description: 'Your card has been created successfully.',
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
              reset();
            });
          }}
        />
      </VStack>
    </MainLayout>
  );
}

export default RegisterCardPage;
