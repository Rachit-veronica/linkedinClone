import "./App.css";
import LinkedinNews from "./components/typescript/LinkedinNews";
import Navbar from "./components/typescript/Navbar";
import { PostAndMainPage } from "./components/typescript/PostAndMainPage";
import UserDescription from "./components/typescript/UserDescription";

function App() {
  return (
    <>
      <Navbar />
      <div className="LandingPagePartitionTest">
        <UserDescription />
        <PostAndMainPage />
        <LinkedinNews />
      </div>
    </>
  );
}

export default App;
