import Link from "next/link";

export default function Clients () {

    const clients = [
        { id: 'lui', name: 'elluis' },
        { id: 'deb', name: 'debbie' },
    ];


    return (
        <div>
            <h1>soy el client</h1>

            <ul>
                { clients.map ((client) => {
                    return (
                        <li key={ client.id }>
                            <Link href={ `/clients/${ client.id }` }>{ client.name }</Link>
                        </li>
                    )
                }) }
            </ul>


        </div>
    );
}