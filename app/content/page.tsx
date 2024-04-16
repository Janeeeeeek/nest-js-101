async function getBlogs() {
    const response = await fetch('https://5d051bc74068c50014e081b6.mockapi.io/listing')

    if(!response.ok){
        throw new Error('cannot fetch blog')
    }
    return response.json()
}

export default async function Page({ params }) {
    const blogs = await getBlogs()
    return (
        <div>
        test page
        {
            blogs.map((blog, index) => (
                <div key={index} >
                    {blog._id} {blog.name}
                    

                </div>
            ))
        }
        </div>  

    )
}

