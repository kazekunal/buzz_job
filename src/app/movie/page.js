import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const MOVIE = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    // this is done so as to view the timer

    const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7aede557cdmsh2efb138bc78e5b0p1cea10jsna0fa4e4b8670',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };


    const res = await fetch(url, options);
    const data = await res.json();

    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                     <div className={styles.container}>
            <h1>Series & movies</h1>
                         <div className={styles.card_section}>
            {
                main_data.map((curElem)=>{
                    return <MovieCard key={curElem.id} {...curElem}/>
            })
            }
                         </div>
                     </div>
            </section>
        </>
    );
};

export default MOVIE;