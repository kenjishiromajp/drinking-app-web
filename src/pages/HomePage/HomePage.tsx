import PlayersForm, {
  PlayersFormValues,
} from '../../components/PlayersForm/PlayersForm';
import MainLayout from '../../layouts/MainLayout/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <h1>Register your players</h1>
      <PlayersForm
        onSubmit={(data: PlayersFormValues) => {
          console.log('data', data);
        }}
      />
    </MainLayout>
  );
}

export default HomePage;
