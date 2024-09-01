import React, { useEffect } from 'react'
import Header from '../../components/common/header/Header'
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/slices/titleSlice';

const Appointments = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Appointments"));
  }, [dispatch]);
  return (
    <div>
    </div>
  )
}

export default Appointments