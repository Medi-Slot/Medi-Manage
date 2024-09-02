import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    patient:{
        patId: null,
        patName: null,
    },
    doctor:{
        docId: null,
        docName: null,
    },
    timeSlot: null,
    bed:{
        required:false,
        bedId:null,
    },

};

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        setPatientData: (state,action)=>{
            state.patient.patId=action.payload.patId;
            state.patient.patName = action.payload.patName;
        },
        setDoctorData: (state , action)=>{
            state.doctor.docId = action.payload.docId;
            state.doctor.docName = action.payload.docName;
        },
        setTimeSlot: (state, action) => {
            state.timeSlot =action.payload;
        },
        setBedData: (state, action) => {
            state.bed.required = action.payload.required;
            state.bed.bedId = action.payload.bedId;
        },
        resetAppointment: () => initialState,


    },
});
export const {
    setPatientData,
    setDoctorData,
    setTimeSlot,
    setBedData,
    resetAppointment,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;