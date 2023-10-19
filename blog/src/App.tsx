import Router from "./components/Router";
import { useState, useEffect, useContext } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";
import { ThemeContext } from "context/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  const auth = getAuth(app);

  const [isAuthenicated, setIsAuthenicated] = useState<boolean>(!!auth?.currentUser);

  //auth를 체크하기전에 (initalize)dp loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenicated(true);
      } else {
        setIsAuthenicated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      {init ? <Router isAuthenicated={isAuthenicated} /> : <Loader />}
    </div>
  );
}

export default App;
