import {ProfilesApp} from './components/ProfilesApp'
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <ProfilesApp />
    </Provider>
  );
}

export default App;
