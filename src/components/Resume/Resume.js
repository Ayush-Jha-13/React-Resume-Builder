import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AtSign, GitHub, Phone, Linkedin, Paperclip, Calendar, MapPin } from "react-feather";

import styles from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [column, setColumn] = useState([[], []]);

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}${
        date.getMonth() = 1
    }${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
    <div key={"workexp"} draggable className={`${styles.workExp} ${styles.workExp}`}>
    <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
    <div className={styles.content}>
      {info.workExp?.details?.map((item) => (
          <div className={styles.item} key={item.title}>
          {
              item.title && (
                  <p className={styles.title}>{item.title}</p>
              )
          }
          {
              item.companyName && (
                  <p className={styles.subTitle}>{item.companyName}</p>
              )
          }
          {
              item.certificationLink && (
              <a className={styles.link} href={item.certificationLink}>
                <Paperclip />
                {item.certificationLink}
              </a>
              )}

          {
              item.startDate && item.endDate (
          <div className={styles.date}>  
            <Calendar /> {" "}
            {getFormattedDate(item.startDate)} -
            {getFormattedDate(item.endDate)}
          </div>
              )}

          {
              item.location && (
          <p className={styles.date}>
            <MapPin /> {item.location}
          </p>
              )}
              {
                  item.points?.length > 0 && (
                    <ul className={styles.points}>
                      {item.points?.map((elem, index) => (
                          <li className={styles.point} key={elem + index}>{elem}</li>
                      ))}
                    </ul>
              )}
        </div>
      ))};
      </div>
  </div>
  ),
  [sections.project]: <div key={"project"} draggable className={`${styles.section} ${styles.project}`}>
  <div className={styles.sectionTitle}>{item.title}</div>
  <div className={styles.content}>
    {info.project?.details?.map((item) => (
        <div className={styles.item}>
            {item.title && <p className={styles.title}>{item.title}</p> }
            {item.link && (
              <a className={styles.link} href={item.link}>
                <Paperclip />
                {item.link}
              </a>
            )}
            {item.github && (
              <a className={styles.link} href={item.github}>
                <GitHub />
                {item.github}
              </a>
            )}
            {item.overview && (
              <p className={styles.overview}>
                {item.overview}
              </p>
            )}
            {
                item.points?.length > 0 && (
                  <ul className={styles.points}>
                    {item.points?.map((elem, index) => (
                        <li className={styles.point} key={elem + index}>{elem}</li>
                    ))}
                  </ul>
            )}
    </div>
    ))}
  </div>
</div>,

[sections.education]: <div key={"education"} draggable className={`${styles.section} ${styles.education}`}>
<div className={styles.sectionTitle}>{info.education}</div>
<div className={styles.content}>
  {info.education?.details?.map((item) => (
    <div className={styles.item}>
    {item.title && 
    <p className={styles.title}>{item.title}</p>
    }
    {item.college && 
    <p className={styles.subTitle}>Some College Name</p>
    }
    {item.startDate && item.endDate && 
    <div className={styles.date}>  
      <Calendar /> {" "}
      {getFormattedDate(item.startDate)} -
      {getFormattedDate(item.endDate)}
    </div>
    }
  </div>
  ))}
</div>
</div>,

[sections.achievement]: (
<div
key={"achievement"} draggable
className={`${styles.section} ${styles.achievement}`}
>
<div className={styles.sectionTitle}>{info.achievement?.sectionTitle}</div>
<div className={styles.content}>
  {info.achievement?.points?.length > 0 && (
      <ul className={styles.numbered}>
      {info.achievement?.points?.map((elem, index) => (
          <li className={styles.point} key={elem + index}>{elem}</li>
      ))}
      </ul>
  )}
</div>
</div>
),

[sections.summary]: (
<div key={"summary"} draggable className={`${styles.section} ${styles.summary}`}>
<div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
<div className={styles.content}>
  <p className={styles.overview}>{info.summary?.summary}</p>
</div>
</div>
),

[sections.other]: (
<div key={"other"} draggable className={`${styles.section} ${styles.other}`}>
<div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
<div className={styles.content}>
  <p className={styles.overview}>{info.other?.other}</p>
</div>
</div>
),
};

  useEffect(() => {
    setColumn([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    const conatiner = containerRef.current;
    if(!props.activeColor || !container) return;

    container.style.setProperty('--color', props.activeColor)
  }, [props.activeColor]);

  return (
    <div ref={ref}>
    <div ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>{info.basicInfo?.details?.name}</p>
        <p className={styles.subHeading}>{info.basicInfo?.details?.title}</p>

        <div className={styles.links}>
          {info.basicInfo?.details.email && (
          <a className={styles.link}>
            <AtSign />
            {info.basicInfo?.details?.email}
          </a>
          )};
          {info.basicInfo?.details.phone && (
          <a className={styles.link}>
            <Phone />
            {info.basicInfo?.details.phone}
          </a>
          )};
          {info.basicInfo?.details?.linkedin && (
          <a className={styles.link}>
            <Linkedin />
            {info.basicInfo?.details?.linkedin}
          </a>
          )};
          {info.basicInfo?.details?.github && (
          <a className={styles.link}>
            <GitHub />
            {info.basicInfo?.details?.github}
          </a>
            
          )}
          <p className={styles.overview}>
            This project is a dumy project built with nothing.
          </p>
          <ul className={styles.points}>
            <li className={styles.point}>It is point one</li>
            <li className={styles.point}>It is point two</li>
            <li className={styles.point}>It is point three</li>
            <li className={styles.point}>It is point four</li>
          </ul>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.col1}>{column[0].map((item) => sectionDiv[item])}</div>
        <div className={styles.col2}>{column[1].map((item) => sectionDiv[item])}</div>
      </div>
    </div>
    </div>
  );
});

export default Resume;
