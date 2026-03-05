import React from 'react'
import {getUser, getUsers} from "@/lib/api";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const Page = async ({ params }: {params: Promise<{usercid:string}>}) => {

    const { usercid } = await params;

    const user = await getUser(usercid);

    return (
        <div className="flex flex-col">
            <div>
                <span>{user.name}</span>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <span>Casa: {user.house}</span>
                    </div>
                    <div>
                        <span>Genero: {user.house}</span>
                    </div>
                    <div>
                        <span>Varita: {user.house}</span>
                    </div>
                    <div>
                        <span>Madera: {user.house}</span>
                    </div>
                    <div>
                        <span>Longitud: {user.house}</span>
                    </div>
                </div>
                <Image src={user.image} alt={user.name} width={400} height={400} />
            </div>
        </div>
    )
}
export default Page
