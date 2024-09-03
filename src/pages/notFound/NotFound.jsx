import React from "react";
import "./style.css";
import { Player } from "@lottiefiles/react-lottie-player";
import NotFounder from "../../assets/images/404.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/slices/titleSlice";

export default function NotFound() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Not Found")); //use the title u need
  }, [dispatch]);

  return (
    <div className="page-not-found">
      <Player
        src={NotFounder}
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      />
      <h1>Page not found</h1>
    </div>
  );
}
