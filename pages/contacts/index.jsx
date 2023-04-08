/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/components/MainLayout";
import styles from "../../styles/contact.module.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Contacts() {
    return (
        <MainLayout title="Contact Us | ShopLocater">
            <div className={styles["contact-us"]}>
                <h1>Contact Us</h1>
                <p>
                    Our team at ShopLocater is always available to help you with any inquiries or concerns you may have. Whether you need assistance with finding a shop, getting directions, or exploring new stores, we're here to help. Please don't hesitate to get in touch with us through the contact information provided below.
                </p>
                <div className={styles["team-members"]}>
                    {/* Magzhan */}
                    <div className={styles["team-member"]}>
                        <h2>Magzhan</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77766860653">+7 (776) 686 06 53</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/emporteme" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/magzhan-karatayev-87126b243/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaInstagram />
                            <a href="https://instagram.com/emporteme?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/emporteme" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </div>
                    {/* Abay */}
                    <div className={styles["team-member"]}>
                        <h2>Abay</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77073349416">+7 (707) 334 94 16</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:pythondelay@gmail.com">pythondelay@gmail.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/LaggerIsME" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/pythondelay/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>

                    {/* Ernar */}
                    < div className={styles["team-member"]} >
                        <h2>Ernar</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77064001516">+7 (706) 400 15 16</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:dev@zxc.sx">dev@zxc.sx</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <SiGithub />
                            <a href="https://github.com/tshipenchko" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/merura/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/merura" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </ div>
                    {/* Anya */}
                    < div className={styles["team-member"]} >
                        <h2>Anya</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+87768328461">+7 (776) 832 84 61</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:boltabay03@gmail.com">boltabay03@gmail.com</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/Onion_Bolt" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </ div>
                    {/* Aruzhan */}
                    < div className={styles["team-member"]} >
                        <h2>Aruzhan</h2>
                        <div className={styles["contact-method"]}>
                            <FaPhone />
                            <a href="tel:+77758392240">+7 (775) 839 22 40</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaEnvelope />
                            <a href="mailto:212305@astanait.kz">212305@astanait.kz</a>
                        </div>
                        <div className={styles["contact-method"]}>
                            <FaTelegram />
                            <a href="https://t.me/call_me_mekaru" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </ div>
                </div >
            </div >
        </MainLayout >
    );
}

