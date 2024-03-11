import Link from 'next/link';

export default function  Sobre() {
    return(
        <>
        <h1> Sobre</h1>
        <p>Informaçoes sobre o site</p>

        <p><Link  href={'/'}> Voltar </Link></p> 
        
        </>
    );
}