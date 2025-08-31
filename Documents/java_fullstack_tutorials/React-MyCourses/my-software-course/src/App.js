import './App.css';
import Header from './components/Header.jsx';
import {courses} from './Data.jsx'
import Course from './components/Course.jsx';
import './css/Course.css'

function App() {
  return (
    <div >
      <Header />
      <div className='course-main'> 
     {
      courses?.map((course)=>(//Data dan gelen itemlarin uzerinde donuyoruz.
       <Course key={course.id} course={course}/> //Course componentine her bir datayi props olarak yolluyoruz.
        //key prop unique id icermeli.Kurslarini id si verilebilir.
      ))
     }
     </div>
    </div>
  );
}

export default App;
