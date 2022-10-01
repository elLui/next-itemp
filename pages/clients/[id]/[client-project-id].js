import { useRouter } from 'next/router';



export default function SelectedClientProject () {

    const router = useRouter();
    console.log (router.query);

return (
    <div>
        <h1>selected client id page</h1>
    </div>
)
}