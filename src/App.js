import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import Messenger from "./components/messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "755342626888-46lon4j7dgqptn4hs7918290ca6fjhei.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
