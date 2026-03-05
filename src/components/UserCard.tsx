import Link from "next/link";
import Image from "next/image";

export type Props = {
    id: string
    username: string
    email: string
    description: string
    image: string
}

const UserCard = ({id, username, email, description, image}: Props) => {
    return (
        <div className="flex items-center p-2 m-2 shadow-lg rounded-lg bg-background border border-accent-foreground/15 hover:border-accent-foreground">
            <Link href={`/marketplace/${id}`} id="item-card" className="block w-[410]">
                <Image src={image} alt={username} width={410} height={300} className="poster rounded-2xl object-cover" />
                <div className="flex flex-row mt-3 p-3">
                    <h3 className="font-bold">${username}</h3>
                    <p className="ml-auto font-bold">{email}</p>
                </div>

                <p className="title mx-3">{username}</p>

                <div className="flex flex-row mt-3 p-3">
                    <p>{description}</p>
                    <p className="ml-auto">{id}</p>
                </div>
            </Link>
        </div>
    )
}
export default UserCard
