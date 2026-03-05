import styles from "./page.module.css";

const formations = {
    sorbonne: {
        title: "Sorbonne", 
        slug: "sorbonne", 
        description: "Formation au campus Pierre et Marie Curie à Paris", 
        technologies: ["React, JS, Php, Python, Java"],
    }, 
    esiee: {
        title: "Esiee[IT]", 
        slug: "esiee", 
        description: "Formation dans le 17e arrondissement en édu scrum. Avec des cours de PHP, JS, Python", 
        technologies: ["React, JS, Php, Python, Java"],
    }, 
    openclassroom: {
        title: "OpenClassRoom", 
        slug: "openclassroom", 
        description: "Formation en ligne de JS, PHP, Python", 
        technologies: ["PHP, JS, Python"],
    }
}

export default async function FormationDetails({params}){
    const {slug} = await params

    const formation = formations[slug]

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
                {formation.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}