import React from 'react'
import {getUser, getUsers} from "@/lib/api";
import UserCard from "@/components/UserCard";

const Page = async ({ params }: {params: Promise<{usercid:string}>}) => {

    const { usercid } = await params;

    const user = await getUser(usercid);

    return (
        <div>
            <li key={user.id}>
                <UserCard {...user} />
            </li>
        </div>
    )
}
export default Page
