import "normalize.css";

import { Provider } from "react-redux";
import { store } from "./Store";
import { useState } from "react";
import { SettingsModal } from "./Components/Settings/SettingsModal";
import {
  SettingsButtonIcon,
  SettingsButtonWrapper,
  TopMenu,
} from "./Components/CommonStyles/RootStyles";
import settingsIco from "./Static/cogwheel.png";

function App() {
  const [displaySettingsModal, setDisplaySettingsModal] = useState(false);
  return (
    <Provider store={store}>
      <TopMenu>
        <SettingsButtonWrapper
          onClick={(e) => {
            e.stopPropagation();
            setDisplaySettingsModal(true);
          }}
        >
          <SettingsButtonIcon src={settingsIco} alt="Настройки" />
        </SettingsButtonWrapper>
      </TopMenu>
      <SettingsModal
        display={displaySettingsModal}
        setDisplay={setDisplaySettingsModal}
      />
    </Provider>
  );
}

export default App;
