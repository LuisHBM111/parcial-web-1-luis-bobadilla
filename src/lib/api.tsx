export type user = {
    id: string
    image: string
    name: string
    house: string
}

const baseURL = "https://hp-api.onrender.com"

if (!baseURL) {
    throw new Error("api undefined");
}

export async function getUsers(): Promise<user[]> {

    const response = await fetch(`${baseURL}/api/characters`, {})

    if (!response.ok) {
        throw new Error("api undefined");
    }

    const data: user[] = await response.json();

    return data.slice(0, 12);

}

export async function getUser(id: string): Promise<user> {

    const response = await fetch(`${baseURL}/api/character/${id}`, {})

    if (!response.ok) {
        throw new Error("api undefined");
    }

    const data = await response.json();

    return data

}