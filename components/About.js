import AboutStyles from "../styles/AboutStyles.module.css";

export default function About() {
  return (
    <>
      <div className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.sectionA}></div>
        <div className={AboutStyles.sectionB}></div>
        <div className={AboutStyles.sectionC}></div>
      </div>
    </>
  );
}