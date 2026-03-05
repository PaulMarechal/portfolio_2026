import Link from "next/link";
import styles from "./page.module.css";
import Tag from "../components/Tags";
import projectsData from '@/data/projects.json'

export default function Projets(){

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Mes projets</h1>
            <p className={styles.description}>
                Découvrez les projets sur lesquels j'ai travaillé
            </p>

            <div className={styles.grid}>
                {projectsData.map((project) => (
                    <Link
                        href={`/projets/${project.slug}`}
                        key={project.id}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tech, index) => (
                                    <Tag key={index} isDark={true}>{tech}</Tag>
                                ))}
                            </div>
                            <span className={styles.viewMore}>Voir le projet</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}