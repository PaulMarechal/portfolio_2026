import styles from "./page.module.css";
import formationsData from "@/data/formations.json"
import { notFound } from "next/navigation"

export default async function FormationDetails({params}){
    const {slug} = await params

    const formation = formationsData.find((formation) => formation.slug === slug); 

    if(!formation){
        notFound()
    }

    if(!formation){
        return(
            <div>
                <h1>Formation non trouvé</h1>
                <p>Cette formation ne fait pas partie de mon cursus</p>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{formation.title}</h1>
                <p className={styles.description}>{formation.description}</p>
            </div>

            <div>
                <h2>Langage appris</h2>
                {formation.languages.map((lang, index) => {
                    <span key={index} className={styles.lang}>
                        {lang}
                    </span>
                })}
            </div>
        </div>
    )
}

// Cette function génère toutes les pages statiques au build 
export function generateStaticParams(){
    return formationsData.map((formation) => ({
        slug: formation.map,
    }))
}