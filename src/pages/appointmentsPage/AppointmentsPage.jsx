import AppointmentItem from '../../components/specific/appointments/appointments/AppointmentItem';
import SetSlots from '../../components/specific/appointments/slots/SetSlots';
import Beds from '../../components/specific/appointments/beds/BedSelector';
import './style.css'; 
import { FaSearch, FaFilter, FaBell } from 'react-icons/fa'; 
const AppointmentsPage = () => {
  return (
    <div className="main-layout">
      <div className="left-panel">
        <div className="appointments-header">
          <div className="appointments-title-container">
            <h2 className="appointments-title">Appointments</h2>
            <div className="search-bar-and-buttons">
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input type="text" className="search-bar" placeholder="Search type for keywords" />
            </div>
         </div>
            <div className="header-icons">
              <FaFilter className="icon" />
              <FaBell className="icon" />
            </div>
          </div>
          
        </div>
        <AppointmentItem />
      </div>

      <div className="right-panel">
        <SetSlots />
        <Beds />
      </div>
    </div>
  );
};

export default AppointmentsPage;