import { useDispatch } from "react-redux"
import { bulkUpdateSettings, settingsStorageKey } from "../Store/settingsSlice";
import { Settings } from "http2";
import { fetchPosts, fetchSettings } from "../Utils/api";
import { useEffect } from "react";
import { setPosts } from "../Store/postsCacheSlice";


const savedStateJson = sessionStorage.getItem(settingsStorageKey);
const savedState = savedStateJson ? JSON.parse(savedStateJson) : null as Settings | null;

export const useServerData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncCall() {
      const settingsState = savedState ?? await fetchSettings();
      dispatch(bulkUpdateSettings(settingsState));

      const posts = await fetchPosts();
      dispatch(setPosts(posts));
    };
    asyncCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}