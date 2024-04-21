import React from 'react';
import styles from "@/app/styles/contact.module.css"
import Job from "@/app/components/job";
import heroStyles from "@/app/styles/herosection.module.css";

const Page = () => {
    return (
        <>
        <div className={styles.job_main}>
            <div className={styles.job_title}>
                <h2 className={styles.job_title_main}>Find your dream job now</h2>
                <h3 className={styles.job_title_sub}>5 lakh+ jobs for you to explore</h3>
            </div>
            <div className={styles.job_request}>
                <Job/>
            </div>
        </div>
        </>
    );
};

export default Page;