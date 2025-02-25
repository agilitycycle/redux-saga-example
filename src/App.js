import {useDispatch, useSelector} from 'react-redux';
import {
  signIn,
  signOut,
  getSubjects,
  updateEdit,
  updateControl,
  updateActive,
  messageState
} from './app/slices';
import {
  Button,
  Container
} from './components';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const newMessageState = useSelector(messageState);
  return (
    <Container message={newMessageState.message || []}>
      <Button handleClick={() => dispatch(signIn())}>Sign in</Button>
      <Button handleClick={() => dispatch(signOut())}>Sign out</Button>
      <Button handleClick={() => dispatch(getSubjects())}>Get subjects</Button>
      <Button handleClick={() => dispatch(updateEdit())}>Update edit</Button>
      <Button handleClick={() => dispatch(updateControl())}>Update controls</Button>
      <Button handleClick={() => dispatch(updateActive())}>Update active</Button>
      <Button handleClick={() => {}}>Reset</Button>
    </Container>
  );
}

export default App;
