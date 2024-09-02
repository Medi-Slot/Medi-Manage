import React, { useEffect } from 'react'
import DoctorGrid from '../../components/specific/doctorgride/DoctorGride'
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/slices/titleSlice';

const DoctorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Doctor")); 
  }, [dispatch]);


  return (
    <div className='doctor-page-main-container'>
      <DoctorGrid />
    </div>
  )
}

export default DoctorPage
