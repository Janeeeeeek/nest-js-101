import Link from 'next/link'

async function getBlogs() {
    const response = await fetch('https://5d051bc74068c50014e081b6.mockapi.io/listing')
  

    if(!response.ok){
        throw new Error('cannot fetch blog')
    }
    return response.json()
}

export default async function Page({ params }) {
    const blogs = await getBlogs()
    // return (
    //     <div>
    //     test page
    //     {
            // blogs.map((blog, index) => (
            //     <div key={index} >
            //         {blog._id} {blog.name}
            //         <Link href={`/blog/${blog._id}`} className="px-4 bg-blue-400">Go to read blog</Link>    
            //     </div>
            // ))
    //     }
    //     </div>  

    // )
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Province
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Click</span>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        blogs.map((blog, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {blog._id}
                        </th>
                        <td className="px-6 py-4">
                            {blog.name}
                        </td>
                        <td className="px-6 py-4">
                            {blog.category}
                        </td>
                        <td className="px-6 py-4">
                            {blog.address.province}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href={`/blog/${blog._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Click</a>
                        </td>
                    </tr>
                            // <div key={index} >
                            //     {blog._id} {blog.name}
                            //     <Link href={`/blog/${blog._id}`} className="px-4 bg-blue-400">Go to read blog</Link>    
                            // </div>
                        ))
                    }
                    
                 
                    
                </tbody>
            </table>
        </div>
        )
}

