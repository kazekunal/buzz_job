import React from 'react';
import styles from "@/app/styles/contact.module.css";
import {MdEmail, MdForum, MdVoiceChat} from "react-icons/md";
import Link from "next/link";
import {
    DiAndroid,
    DiAngularSimple,
    DiDatabase, DiEclipse,
    DiGitBranch,
    DiIllustrator,
    DiJava,
    DiPython,
    DiUnitySmall
} from "react-icons/di";

const JobOpening = () => {
    return (
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.grid_card}>
                            <i> <DiJava /> </i>
                            <h2>Java Web Developer</h2>
                            <p>Cisco pvt. ltd</p>
                            <p className={styles.last_para}>Skills required: Javascript, java</p>
                            <Link href="#">  View job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiAndroid /> </i>
                            <h2>Android Developer</h2>
                            <p>Google</p>
                            <p className={styles.last_para}>Skills required: Java, C++</p>
                            <Link href="#" >  view job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiDatabase /> </i>
                            <h2>Database engineer</h2>
                            <p>Microsoft </p>
                            <p className={styles.last_para}>Skills required: mysql, mongodb </p>
                            <Link href="#" className={styles.anchorLink}> view job <span>-&gt;</span></Link>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.grid_card}>
                            <i> <DiEclipse />
                            </i>
                            <h2>App Developer</h2>
                            <p>Apple</p>
                            <p className={styles.last_para}>Skills required: java, swift</p>
                            <Link href="#">  View job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiGitBranch />
                            </i>
                            <h2>Git specialist</h2>
                            <p>Github</p>
                            <p className={styles.last_para}>Skills required: git, github</p>
                            <Link href="#" >  view job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiAngularSimple />
                            </i>
                            <h2>Anguler developer</h2>
                            <p>Intel</p>
                            <p className={styles.last_para}>Skills required: javascript, angular</p>
                            <Link href="#" className={styles.anchorLink}> view job <span>-&gt;</span></Link>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.grid_card}>
                            <i> <DiIllustrator />
                            </i>
                            <h2>AI specialist</h2>
                            <p>Open AI</p>
                            <p className={styles.last_para}>Skills required: LLM, machine learning</p>
                            <Link href="#">  View job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiPython />
                            </i>
                            <h2>python Developer</h2>
                            <p>accenture</p>
                            <p className={styles.last_para}>Skills required: python</p>
                            <Link href="#" >  view job <span>-&gt;</span></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i> <DiUnitySmall />
                            </i>
                            <h2>Game developer</h2>
                            <p>Unity</p>
                            <p className={styles.last_para}>Skills required: C# </p>
                            <Link href="#" className={styles.anchorLink}> view job <span>-&gt;</span></Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default JobOpening;