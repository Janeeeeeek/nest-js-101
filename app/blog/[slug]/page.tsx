

async function getBlog(slug) {
    const response = await fetch(`https://5d051bc74068c50014e081b6.mockapi.io/listing/${slug}`)
   
    

    if(!response.ok){
        throw new Error('cannot fetch blog')
    }
    return response.json()
}

export default async function Page({ params }) {
    const blog = await getBlog(params.slug)
    return (
        <div>
            ID: { params.slug }
            <div>
            Blog Name: {blog.name}
            </div>
            <div>
                Category:{blog.category}
            </div>
        </div>
        
    )
   
}
