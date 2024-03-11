import Link from 'next/link';
export default function Page(){
return (
    <>
    <h1>Hello Next</h1>
    <h2>Hello, 02</h2>
    <h3>Hello, 03</h3>
    Qualquer coisa

    <Link  href={'/sobre'}> Sobre </Link>
    <Link href={'/cadusuario'}> Cadastro Usuario</Link>
    </>
);
}