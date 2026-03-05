import Link from "next/link";
import Image from "next/image";

export type Props = {
    id: string
    image: string
    name: string
    house: string
}
const BgColorHouses = {
    Gryffindor: 'bg-[#740001]',
    Slytherin: 'bg-[#1A472A]',
    Ravenclaw: 'bg-[#0E1A40]',
    Hufflepuff: 'bg-[#FFD800]',
}

const BorderColorHouses = {
    Gryffindor: 'border-[#740001]',
    Slytherin: 'border-[#1A472A]',
    Ravenclaw: 'border-[#0E1A40]',
    Hufflepuff: 'border-[#FFD800]',
    NoHouse: 'border-[#D1D5DB]',
}

function bgColor(color: { house: string }) {
    if(color.house === "Gryffindor") {
        return 'bg-[#740001]'
    }
    else if(color.house === "Slytherin") {
        return 'bg-[#1A472A]'
    }
    else if(color.house === "Ravenclaw") {
        return 'bg-[#0E1A40]'
    }
    else if(color.house === "Hufflepuff") {
        return 'bg-[#FFD800]'
    }
    return 'bg-[#FFD800]'
}

const UserCard = ({id, image, name, house}: Props) => {
    return (
        <div className="flex items-center shadow-lg border border-accent-foreground/15 hover:border-accent-foreground rounded-2xl">
            <Link href={`/profile/${id}`} id="Card" className="block w-[410] rounded-2xl">
                <div className={bgColor({house})}>
                    <span className="text-center font-bold text-white">{name}</span>
                </div>
                <Image src={image} alt={name} width={410} height={300} className="poster object-cover" />
            </Link>
        </div>
    )
}
export default UserCard
