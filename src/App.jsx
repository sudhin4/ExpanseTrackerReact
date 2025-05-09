import Header from "./assets/Component/Header/Header";
import Home from "./assets/Pages/Home/Home";
import '../src/App.css'
import MenuBar from "./assets/Component/LeftTaskbar/MenuBar";

function App() {
  return (
    <>
      <div className="WHole_app_div">
        <Header />
        <div className="MenuBar_othercompContDiv">
          <div className="Left_MenuBar_section_IN_home">
            <MenuBar />
          </div>
          <div className="Right_section_pages">
           <Home /> 
          </div>
          
        </div>
      </div>
    </>
  );
}
export default App;
