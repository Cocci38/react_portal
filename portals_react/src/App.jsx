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

  return (
    <div>
      <ModalButton /> 
    </div>
  )
}

export default App
