import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";
import StudentsPage from "./StudentsPage.js";
import StaffPage from "./StaffPage.js";
import CharactersPage from "./CharactersPage.js";

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStudentVisible, setIsStudentVisible] = useState(false);
  const [isStaffVisibility, setIsStaffVisibility] = useState(false);
  const [isCharactersVisibility, setIsCharactersVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleStudentsVisibility = () => {
    setIsStudentVisible(!isStudentVisible);
  };
  const handleStaffVisibility = () => {
    setIsStaffVisibility(!isStaffVisibility);
  };
  const handleCharactersVisibility = () => {
    setIsCharactersVisibility(!isCharactersVisibility);
  };

  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.header}>WELCOME TO THE HARRY POTTER WORLD</h1>
        <button
          className={styles.showCharactersBtn}
          onClick={handleToggleVisibility}
        >
          Show all characters
        </button>
        {isVisible && (
          <div className={styles.charactersPopUp}>
            <div className={styles.students}></div>
            <div className={styles.tutors}></div>
            <div className={styles.characters}></div>
          </div>
        )}
        {isVisible && (
          <div className={styles.buttons}>
            <button
              className={styles.popUpBtn}
              onClick={handleStudentsVisibility}
            >
              Hogwarts' students
              <Link to="/students"></Link>
            </button>
            <button className={styles.popUpBtn} onClick={handleStaffVisibility}>
              Hogwarts' staff
              <Link to="/staff"></Link>
            </button>
            <button
              className={styles.popUpBtn}
              onClick={handleCharactersVisibility}
            >
              Characters from each house
              <Link to="/characters"></Link>
            </button>
          </div>
        )}
        {isStudentVisible && <StudentsPage isVisible={isStudentVisible} />}
        {isStaffVisibility && <StaffPage isVisible={isStaffVisibility} />}
        {isCharactersVisibility && (
          <CharactersPage isVisible={isCharactersVisibility} />
        )}
      </div>
    </>
  );
};

export default MainPage;
