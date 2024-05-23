import styles from './App.module.css';

const StudentsPage = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.cardsContainer}>
        <h1 className={styles.h1Cards}>Hogwarts' students</h1>
        <div className={styles.cardsDiv1}>
          <div className={`${styles.potter} ${styles.card}`}>
            <h3>Harry Potter</h3>
            <p>
              The Boy Who Lived
              <br /> Gryffindor
              <br />
              31-07-1980
            </p>
            <p className={styles.moreInfo}>
              More information
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.granger} ${styles.card}`}>
            <h3>Hermione Granger</h3>
            <p>
              Know-it-all <br /> Gryffindor <br />
              19-09-1979
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.weasley} ${styles.card}`}>
            <h3>Ron Weasley</h3>{' '}
            <p>
              Dragomir Despard <br />
              Gryffindor <br />
              01-03-1980
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.malfoy} ${styles.card}`}>
            <h3>Draco Malfoy</h3>{' '}
            <p>
              Pure-blood <br />
              Slytherin <br />
              05-06-1980
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={styles.cardsDiv2}>
          <div className={`${styles.diggory} ${styles.card}`}>
            <h3>Cedric Diggory</h3>{' '}
            <p>
              Ced <br />
              Hufflepuff <br />
              31-07-1980
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.chang} ${styles.card}`}>
            <h3>Cho Chang</h3>{' '}
            <p>
              Seeker <br />
              Ravenclaw <br />
              07-04-1979
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.longbottom} ${styles.card}`}>
            <h3>Neville Longbottom</h3>{' '}
            <p>
              {' '}
              Head of Gryffindor House <br />
              Gryffindor <br />
              30-07-1980
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
          <div className={`${styles.lovegood} ${styles.card}`}>
            <h3>Luna Lovegood</h3>{' '}
            <p>
              Née Lovegood <br />
              Ravenclaw <br />
              13-02-1981
            </p>
            <p className={styles.moreInfo}>
              More information{' '}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsPage;
