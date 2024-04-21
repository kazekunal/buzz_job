"use client"
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        qualification: "",
        skills: ""
    });
    const [status, setStatus] = useState('');

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", // Correct header
                },
                body: JSON.stringify(user)
            });

            if (response.status === 200) {
                setUser({
                    username: "",
                    phone: "",
                    email: "",
                    password: "",
                    qualification: "",
                    skills: ""
                });
                setStatus('Success! Your information was submitted.');
            } else {
                setStatus('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
            setStatus('Failed to submit. Please check your connection.');
        }
    }
    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name:
                    <input type="text" name="username" id="username"
                           // placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter your number:
                    <input type="number" name="phone" id="phone"
                           // placeholder="Enter your number"
                           className={mulish.className}
                           value={user.phone}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter your email:
                    <input type="text" name="email" id="email"
                           // placeholder="Enter your email"
                           className={mulish.className}
                           value={user.email}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="password" className={styles.label}>
                    Enter your password:
                    <input type="password" name="password" id="password"
                           // placeholder="Enter your password"
                           className={mulish.className}
                           value={user.password}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="qualification" className={styles.label}>
                    Enter your qualification:
                    <input type="text" name="qualification" id="qualification"
                           // placeholder="Enter your qualification"
                           className={mulish.className}
                           value={user.qualification}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="skills" className={styles.label}>
                    Enter your Skills:
                    <textarea name="skills" id="skills" rows={5}
                              // placeholder="Enter your skills"
                              className={mulish.className}
                              value={user.skills}
                              onChange={handleChange}
                              required
                    />
                </label>
            </div>
            <div className={styles.status_message}>
                {status && <p>{status}</p>}
            </div>
            <div>
                <button type="submit" className={mulish.className}>
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;