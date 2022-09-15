// import './App.css';
import Massenger from "./component/Massenger";
import AccountProvider from "./context/AccountProvider";
import TempletProvider from "./theme/TempletProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <TempletProvider>
      <UserProvider>
        <AccountProvider>
          <Massenger />
        </AccountProvider>
      </UserProvider>
    </TempletProvider>
  );
}

export default App;
