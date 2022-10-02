import { useRouter } from "next/router";


export default function ClientProject_1 () {

    const router = useRouter();


    function loadProjectHandler () {
        console.log (router.query);

        // router.push('/');
        // router.replace() will not allow the user to go back


        // yet another way to set up a link
        router.push({
            pathname: '/clients/[id]/[client-project-id]',
            query: {id: 'max', clientprojectid: 'project'},
        });


    }


    return (
        <div>
            <h1>client project 1</h1>
            {/* setting up a programmatic link */}
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}