import MainPage from "./mainPage";
import Heder from "./hederComponents/heder";
import Footer from "./footer/Footer";

//  npm i react-router-dom
function App() {
  return (
    < div className="app d-flex flex-column min-vh-100"> 
        <Heder/>
        <MainPage />
        <Footer/>
    </div>
      
  );
}

export default App;



