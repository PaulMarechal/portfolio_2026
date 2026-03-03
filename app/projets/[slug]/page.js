import styles from "./page.module.css"

// Liste des projets ( API OU DB normallement )
const projets = {
    portfolio: {
        title: "Portfolio personnel",
        slug: "portfolio",
        description: "Site web moderne construit avec Next.js",
        technologies: ["React", "R3F"],
        github: "https://github.com/",
        demo: "https://",
    },
    ecommerce: {
        title: "App E-commerce",
        slug: "ecommerce",
        description: "Boutique en ligne (exemple) avec panier et paiement.",
        technologies: ["Next.js", "React"],
        github: "https://github.com/",
        demo: "https://",
    },
    blog: {
        title: "Blog Technique",
        slug: "blog",
        description: "Blog statique/dynamique (exemple) avec articles.",
        technologies: ["Next.js", "MDX"],
        github: "https://github.com/",
        demo: "https://",
    },
}

export default async function ProjectDetails({ params }){
    const { slug } = await params

    // Next passe automatiquement le slug dans les params
    const project = projets[slug]

    // Si le projet n'existe pas, afficher un message
    if(!project){
        return(
            <div>
                <h1>Projet non trouvé</h1>
                <p>Ce projet n&apos;existe pas ou a été supprimé.</p>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.description}>{project.description}</p>
            </div>

            <div className={styles.content}>
                
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        Image du projet
                    </div>
                </div>

                <div>
                    <h2>Technologies utilisées</h2>
                    <div className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.tech}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Voir le code ➡
                        </a>
                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.link} ${styles.linkPrimary}`}
                        >
                            Voir la démo ➡
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}