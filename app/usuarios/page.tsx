import Link from 'next/link';

export default function  ListaUsuario() {
    return(
        <>
        <h1> Usuario</h1>
        <p><Link href={'/usuarios/1'}>usuario 1</Link></p>
        <p><Link href={'/usuarios/2'}>usuario 2</Link></p>
        <p><Link href={'/usuarios/3'}>usuario 3</Link></p>

        <p><Link  href={'/'}> Voltar </Link></p> 
        
        </>
    );
}