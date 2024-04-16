export default function Page({ params }){
    return (
        <div>{ params.slug }: { params.lottoname } { params.lottoId}</div>
        
    )
}

// content/jane/lotto/419
// content /slug/ lotto /lottoId