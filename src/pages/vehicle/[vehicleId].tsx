import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Vehicle() {
    const router = useRouter()
    const vehicleId = router.query.vehicleId
    return (
        <>
        <Link href={"/vehicle"}>Voltar</Link>
        <h1>Página com as informações do veículo</h1>
        </>
        
    )
  }
  