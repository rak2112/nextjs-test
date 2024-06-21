
import type { Metadata } from "next";
import { Monster } from '@/components/monster'


export const metadata: Metadata = {
  title: "Monster Details Page",
  description: "Monster Details page by create next app",
};

export default async function MonsterPage ({ params }: { params: { id: string[] } }) {
    const [_, id] = params?.id
    const res = await fetch(`https://www.dnd5eapi.co/api/monsters/${id}`)
    const data = await res.json()

  return <Monster monster={data}/>
}

