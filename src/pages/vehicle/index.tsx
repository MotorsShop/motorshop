import Link from "next/link"
export default function Vehicle() {
  return (
    <>
      <h1>Page Vehicles</h1>
      <Link href={`/vehicle/1`}>Mostrar detalhes veículo</Link>
      <div>
      <Link href={"/"}>Voltar</Link>
      </div>
    </>
      

  )
}
