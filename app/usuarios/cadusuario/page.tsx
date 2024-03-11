import Link from 'next/link';
 
export default function  CadUsiario() {
    return(
        <>
        <h1> Cadastro </h1>
        <p>Informaçoes sobre o usuario</p>

        <p><Link  href={'/'}> Voltar </Link></p> 
        </>
        
        
    );
    
}