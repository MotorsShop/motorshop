import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Página principal</h1>
      <div>
      <Link href={"/vehicle"}>Ir para a pagina de veiculos</Link>
      </div>
      <div>
      <Link href={"/profile"}>Ir para a pagina de profile</Link>
      </div>
      <div>
      <Link href={"/login"}>Ir para a pagina de login</Link>
      </div>
      <div>
      <Link href={"/register"}>Ir para a pagina de registro</Link>
      </div>
    </>
  );
}
