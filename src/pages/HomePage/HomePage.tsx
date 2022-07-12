import { useNavigate } from 'react-router-dom';
import PlayersForm, {
  PlayersFormValues,
} from '../../components/PlayersForm/PlayersForm';
import { useAppDispatch } from '../../hooks/useAppSelector';
import usePlayersSelector from '../../hooks/usePlayersSelector';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { updatePlayers } from '../../reducers/playerReducer';

function HomePage() {
  const players = usePlayersSelector(state => state.players);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <h1>Register your players</h1>
      <PlayersForm
        defaultValues={{ players }}
        onSubmit={(data: PlayersFormValues) => {
          dispatch(updatePlayers(data.players));
          navigate('/game-selection');
        }}
      />
    </MainLayout>
  );
}

export default HomePage;
