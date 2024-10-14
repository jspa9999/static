import logo from './logo.svg';
import './App.css';
import Marklist from './Classes/Marklist';

function App() {

 let studentRavi = new Marklist();
 studentRavi.engMarks = 75;
 studentRavi.telMarks = 79;
 studentRavi.hinMarks = 74;
 studentRavi.sciMarks = 94;
 studentRavi.mathMarks = 98;
 studentRavi.socMarks = 85;
 

 console.log(Marklist.passMarks = 35);

 Marklist.aboutSchool();

 studentRavi.calculateResult();


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
