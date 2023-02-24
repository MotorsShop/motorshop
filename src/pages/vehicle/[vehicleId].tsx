import Link from 'next/link'
import { useRouter } from 'next/router'
import Description from '@/components/description' 
import ContanerComment from '@/components/ContanerComment'


export default function Vehicle() {
    const router = useRouter()
    const vehicleId = router.query.vehicleId
    return (
        <>
        <Link href={"/vehicle"}>Voltar</Link>
        <h1>Página com as informações do veículo</h1>
        <div>
            <Description/>
            <ContanerComment/>
        </div>
        </>
        
    )
  }
  