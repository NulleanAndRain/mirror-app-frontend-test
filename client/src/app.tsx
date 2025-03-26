import "normalize.css";

import { Provider } from "react-redux";
import { store } from "./Store";
import { SettingsPanel } from "./Components/Settings/SettingsPanel";

function App() {
  return (
    <Provider store={store}>
      <SettingsPanel />
    </Provider>
  );
}

export default App;
