import { useRouter } from "next/router";
// withRouter will need to wrap a class based component


export default function Project_1 () {

    const router = useRouter();

    console.log(router.pathname);

    // returns the value of the url
    // used to send a request to a back-end server - to fetch a piece data with an id
    // router.query.projectid
    console.log (router.query);


    return (

        <div>
            <h1>this is project 1 page</h1>
        </div>)


}