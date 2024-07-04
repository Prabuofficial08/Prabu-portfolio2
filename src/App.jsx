import logo from './logo.svg';
import './App.css';
import ProfileCard from "./Component/Profilecard/ProfileCard"
import Herosection from './Component/Herosection/Herosection';
import Numbercard from './Component/NumberCard/Numbercard';
import Specializationcard from './Component/Specializationcard/Specializationcard';
import Services from './Component/Services/Services';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <ProfileCard />
     <Herosection />
     <Numbercard />
     <Numbercard />
     <Services />
     <Specializationcard />
     <Navbar />
     
    </div>
  );
}

export default App;
