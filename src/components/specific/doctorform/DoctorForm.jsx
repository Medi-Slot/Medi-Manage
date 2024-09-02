import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./style.css";
import { db, auth, storage } from "../../../Firebase"; // Make sure 'storage' is imported from your Firebase configuration

const DoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: "",
    speciality: "",
    qualification: "",
    experience: "",
    phoneNumber: "",
    imageUrl: "", // This will store the URL of the uploaded image
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(""); // State to hold the preview URL

  const handleChange = (e) => {
    setDoctorData({
      ...doctorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // Store the selected image file

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result); // Set the preview URL to display the image
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    try {
      let imageUrl = "";

      // Upload image to Firebase Storage if an image was selected
      if (imageFile) {
        const imageRef = ref(
          storage,
          `doctorImages/${user.uid}/${imageFile.name}`
        );
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Add the doctor data along with the imageUrl to Firestore
      const docRef = await addDoc(
        collection(db, "Hospitals", user.uid, "Doctors"),
        {
          ...doctorData,
          imageUrl, // Save the image URL in Firestore
        }
      );

      console.log("Doctor added with ID: ", docRef.id);

      // Optionally, reset the form
      setDoctorData({
        doctorName: "",
        speciality: "",
        qualification: "",
        experience: "",
        phoneNumber: "",
        imageUrl: "",
      });
      setImageFile(null); // Reset the image file input
      setPreviewUrl(""); // Reset the image preview
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="doctor-form-container">
      <div className="doctor-form-header">
        <div
          className="doctor-form-doctor-image-input"
          style={{
            backgroundImage: previewUrl
              ? `url(${previewUrl})`
              : `url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        >
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="doctor-form-form-title">
          <h2>Register</h2>
          <p>Enter doctor details</p>
        </div>
      </div>

      <form className="doctor-form" onSubmit={handleSubmit}>
        <div className="doctor-form-group">
          <label>Name of the Doctor</label>
          <input
            type="text"
            name="doctorName"
            placeholder="Ex: Phani Kumar"
            value={doctorData.doctorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Speciality</label>
          <input
            type="text"
            name="speciality"
            placeholder="Ex: Cardiologist"
            value={doctorData.speciality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            placeholder="Ex: MBBS, MD"
            value={doctorData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Experience (in yrs)</label>
          <input
            type="number"
            name="experience"
            placeholder="Ex: 5"
            value={doctorData.experience}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="doctor-form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Ex: 9876543210"
            value={doctorData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="doctor-form-submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
