export type user = {
    id: string
    username: string
    email: string
    description: string
    image: string
}

const baseURL = ""

if (!baseURL) {
    throw new Error("api undefined");
}

export async function getUsers(): Promise<user[]> {

    const response = await fetch(`${baseURL}/users`, {})

    if (!response.ok) {
        throw new Error("api undefined");
    }

    const data: user[] = await response.json();

    return data.slice(0, 10);

}

export async function getUser(id: string): Promise<user> {

    const response = await fetch(`${baseURL}/users/${id}`, {})

    if (!response.ok) {
        throw new Error("api undefined");
    }

    const data = await response.json();

    return data.profile

}