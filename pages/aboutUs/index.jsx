/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import styles from "../../styles/aboutUs.module.scss";

export default function AboutUs() {
    return (
        <MainLayout title="About Us | Shop Finder">
            <div className={styles["about-us"]}>
                <h1>About Our Team</h1>
                <p>
                    We are a team of five dedicated professionals, each with their unique
                    expertise and passion for creating an exceptional website for searching shops with
                    and without a map. Our collaboration has resulted in a platform that caters to the
                    needs of users looking to find the best shopping experiences in their area.
                </p>

                <h2>Our Team Members:</h2>
                <ul>
                    <li><strong>Magzhan</strong> - Team Leader, Frontend Developer (React and Next.js)</li>
                    <li><strong>Abay</strong> - Backend Developer (FastAPI, MongoDB)</li>
                    <li><strong>Ernar</strong> - Backend Developer (FastAPI, MongoDB)</li>
                    <li><strong>Anya</strong> - DevOps Engineer (Docker)</li>
                    <li><strong>Aruzhan</strong> - UX/UI Designer, Presentation Maker</li>
                </ul>

                <p>
                    Each member of our team has a diverse set of skills that contribute to
                    the success of our platform. We have collaborated to create a seamless user
                    experience, from the frontend interface to the backend infrastructure.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Our mission is to make it easy for users to discover the best shopping experiences in their area by providing a reliable and user-friendly platform. We believe that by connecting people to local shops, we can help support local businesses and foster a sense of community.
                </p>

                <h2>Our Vision</h2>
                <p>
                    Our vision is to become the go-to platform for users seeking a comprehensive and up-to-date directory of shops in their area. We strive to continuously improve our platform, incorporating user feedback and the latest technology to create an even better experience for our users.
                </p>

                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/team1.jpg" alt="Team Photo 1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <p>
                    We are proud to have worked on this project for the KazAeroSpace Hackathon and believe that our efforts have resulted in a valuable solution for users to find and explore shops in their area.
                </p>

                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/team2.jpg" alt="Team Photo 2" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </MainLayout>
    );
}
