import ModalButton from "./components/ModalButton";
import './App.css'

function App() {

  document.body.style.backgroundColor = localStorage.getItem('color');
  //console.log(buttonShow);
  //if (localStorage.getItem('theme') == "red") {
  //let buttonShow = document.getElementsByClassName('buttonShow');
  // buttonShow.style.background = "#FFEBEB";
  // buttonShow.style.color = "#353535";
  //}

  // const {name} = useContext(ColorModeContext);
  // console.log(name);
  return (
    <div>
      {/* <useColorMode.Consumer> */}
        <ModalButton />
      {/* </useColorMode.Consumer> */}
    </div>
  )
}

export default App
