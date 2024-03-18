import Link from 'next/link';

export default function  ListaUsuario() {
    return(
        <>
        <h1> Usuario</h1>
        <p>usuario 1</p>
        <p>usuario 2</p>
        <p>usuario 3</p>

        <p><Link  href={'/'}> Voltar </Link></p> 
        
        </>
    );
}