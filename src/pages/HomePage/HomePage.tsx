import PlayersForm, {
  PlayersFormValues,
} from '../../components/PlayersForm/PlayersForm';
import { useAppSelector } from '../../hooks/useAppSelector';
import MainLayout from '../../layouts/MainLayout/MainLayout';

function HomePage() {
  const players = useAppSelector(state => state.players.players);
  return (
    <MainLayout>
      <h1>Register your players</h1>
      <PlayersForm
        defaultValues={{ players }}
        onSubmit={(data: PlayersFormValues) => {
          console.log('data', data);
        }}
      />
    </MainLayout>
  );
}

export default HomePage;
