"use client";
import React from "react";
import styles from "./Loading.module.css";

function Loading() {

  return (
    <div className={`${styles.loadingWrapper}`}>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
