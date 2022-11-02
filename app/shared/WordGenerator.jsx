"use client"

import { useState } from "react"

const datas = ["Apple", "Samsung", "Oppo", "Huawei", "Nokia", "Realme", "Asus ROG"];

export default function WordGenerator(){
    const [data, setData] = useState("Nothing: ");
   
    const generate = () => {
        const randemData =  datas[Math.floor(Math.random() * datas.length)];
        setData(randemData)

    }

    return(
        <div>
            <button onClick={generate}>
                Generate Hanphone
            </button>
            <div>generate: {data}</div>
        </div>
    )
}

