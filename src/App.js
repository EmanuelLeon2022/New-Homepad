import Homepage from './components/Homepage';
import CalendarPage from './components/CalendarPage'
import MaintenanceRequest from './components/MaintenanceRequest'
import Renter from './components/Renter'
import Landlord from './components/Landlord'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="head">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Calendar' element={<CalendarPage/>}/>
          <Route path='/Maintenance' element={<MaintenanceRequest/>}/>
          <Route path='/Renter' element={<Renter/>}/>
          <Route path='/Landlord' element={<Landlord/>}/>
          <Route/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
