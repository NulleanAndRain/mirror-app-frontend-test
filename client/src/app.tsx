import "normalize.css";

import { useState } from "react";
import { SettingsModal } from "./Components/Settings/SettingsModal";
import {
  SettingsButtonIcon,
  SettingsButtonWrapper,
  TopMenu,
} from "./Components/CommonStyles/RootStyles";
import settingsIco from "./Static/cogwheel.png";
import { PageContent } from "./Components/Layout/PageContent";
import { useServerData } from "./Hooks/AppHooks";

function App() {
  const [displaySettingsModal, setDisplaySettingsModal] = useState(false);

  useServerData();

  return (
    <>
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

      <PageContent />

      <SettingsModal
        display={displaySettingsModal}
        setDisplay={setDisplaySettingsModal}
      />
    </>
  );
}

export default App;
