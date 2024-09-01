import React from "react";
import StatCard from "../../components/specific/dashboard/statcard/StatCard";
import patient from "../../assets/images/newpatient.png";
import bag from "../../assets/images/bag.png";
import "./style.css"
import PatientVisitChart from "../../components/specific/dashboard/patientvisitchart/PatientVisitChart";
import PatientData from "../../components/specific/dashboard/patientdata/PatientData";

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-sub-container">
        <StatCard />
        <StatCard
          name="New Patient"
          image1={patient}
          value="1995"
          change={199}
        />
        <StatCard
          name="New Appointment"
          image1={bag}
          value="153"
          change={201}
        />
      </div>
      <div>
        <PatientVisitChart />
      </div>
      <div>
        <PatientData />
      </div>
    </div>
  );
};

export default Dashboard;
