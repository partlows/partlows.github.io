"use client"

import { PlayingCard } from "./components/PlayingCard"
import { SuitEnum } from "./types/solitaire-types"

export default function Page() {
    return <div style={{zIndex: 10}}>
        {Array.from({length: 5}).map((_, i) => {
            return <PlayingCard key={i} suit={SuitEnum.DIAMOND} value={i} />
        })}
    </div>
}