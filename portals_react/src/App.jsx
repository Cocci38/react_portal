import ModalButton from "./components/ModalButton";
import './App.css'
import { ColorModeContext } from "./hooks/useColorMode";

function App() {

  // document.body.style.backgroundColor = localStorage.getItem('color');
  //console.log(buttonShow);
  //if (localStorage.getItem('theme') == "red") {
  //let buttonShow = document.getElementsByClassName('buttonShow');
  // buttonShow.style.background = "#FFEBEB";
  // buttonShow.style.color = "#353535";
  //}

  // const theme = useContext(ColorModeContext);
  // console.log(theme);
  return (
    <div>
      {/* <ColorModeContext.Provider value={theme}> */}
        <ModalButton />
      {/* </ColorModeContext.Provider> */}
    </div>
  )
}

export default App
