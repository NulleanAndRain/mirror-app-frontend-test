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
import { PostData } from "./Types/posts";
import { Post } from "./Components/PostTemplate/Post";

const postJson = `{
    "caption": "Desolo temeritas velut temperantia conscendo commodo commemoro non officia admoneo.",
    "id": "f6e10d9f-0ef5-400b-b6b1-2da049d1da71",
    "date": "2025-03-04T00:23:10.793Z",
    "comments": 54,
    "likes": 823,
    "permalink": "https://reckless-mozzarella.com/",
    "userId": "88873bc3-b1bd-40c8-b897-baffbad54d20",
    "userName": "Oleg"
  }`;
const postData = JSON.parse(postJson) as PostData;

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

      <Post
        caption={postData.caption}
        comments={postData.comments}
        date={postData.date}
        key={postData.id}
        likes={postData.likes}
        userName={postData.userName}
      />

      <SettingsModal
        display={displaySettingsModal}
        setDisplay={setDisplaySettingsModal}
      />
    </Provider>
  );
}

export default App;
