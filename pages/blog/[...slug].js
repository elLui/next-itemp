import { useRouter } from "next/router";

// having the file name with the pseudo spread operator will allow us to write url links with
// multiple nested routes - the query returns an array of the values of the address
// e.g. blog/this/is/an/address - will be queried with those values returned as an array


export default function BlogPost() {

    const router = useRouter();

    console.log (router.query);



    return(
        <div>
            <h1>the blog posts</h1>
        </div>
    )
}