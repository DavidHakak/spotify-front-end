import "./global.css";
import Layout from "./Layout";
import { ContextProvider } from "./context/manageContext";
import { useEffect, useState } from "react";
import LayoutLogin from "./LayoutLogin";
import apiCalls, { setToken } from "./functions/apiRequest";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();
  const [user, setUser] = useState(!false);

  useEffect(() => {
    const startApp = async () => {
      await setToken(localStorage.token);
      apiCalls("get", "http://localhost:9999/api/user/").then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          nav("/myapp");
        }
      });
    };

    !user && localStorage.token && startApp();
  }, []);

  return (
    <div className="App">
      {!user && (
        <>
          <LayoutLogin setUser={setUser} />
        </>
      )}
      {user && (
        <>
          <ContextProvider user={user} setUser={setUser}>
            <Layout />
          </ContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
