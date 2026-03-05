import {getUsers} from "@/lib/api";
import UserCard from "@/components/UserCard";

const UsersMap = async () => {

    const users = await getUsers();

    return (
        <div className="flex justify-around w-full">
            <ul className="flex flex-wrap justify-evenly px-5">
                {users.map((user) => (
                    <li key={user.id}>
                        <UserCard {...user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UsersMap
