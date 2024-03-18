import Link from 'next/link';
export default function Page() {
    return (
        <>
            <h1>Hello Next</h1>
            <h2>Hello, 02</h2>
            <h3>Hello, 03</h3>

            <ul>
                <li><Link href={'/sobre'}> Sobre </Link></li>
                <li><Link href={'/usuarios/cadusuario'}> Cadastro Usuario</Link></li>
                <li><Link href={'/usuarios'}> Listar usuarios</Link></li>
            </ul>
        </>
    );
}  