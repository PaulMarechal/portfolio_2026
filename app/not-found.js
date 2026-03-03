import Link from "next/link"

export default function NotFound(){
    return(
        <div>
            <h1>404 - page non trouvé</h1>
            <p>Désolé, cette page n'existe pas.</p>
            <Link href="/">Retour a l'accueil</Link>
        </div>
    )
}