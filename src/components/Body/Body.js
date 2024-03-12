import React, { useRef, useState } from "react";
import ReactToPrint from 'react-to-print';
import {ArrowDown} from 'react-feather';

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";



function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      SectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      SectionTitle: sections.workExp,
      detail: {},
    },
    [sections.project]: {
      id: sections.project,
      SectionTitle: sections.project,
      detail: {},
    },
    [sections.achievements]: {
      id: sections.achievements,
      SectionTitle: sections.achievements,
      points: {},
    },
    [sections.summary]: {
      id: sections.summary,
      SectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      SectionTitle: sections.other,
      detail: "",
    },
  })

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor === item ? styles.active : ""}`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint 
        trigger={() => {
          return (
            <button>
               Download <ArrowDown />
            </button>
          );
        }}
        content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor sections={sections} 
        information={resumeInformation}
        setInformation={setResumeInformation}
        />
        <Resume
        ref={resumeRef} 
        sections={sections}
        information={resumeInformation}
        activeColor= {activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
