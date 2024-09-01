import React from "react";
import PatientData from "../../components/specific/patientPage/patientData/PatientData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";
export default function PatientPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Patients")); //use the title u need
  }, [dispatch]);

  return (
    <div>
      <PatientData />
    </div>
  );
}
