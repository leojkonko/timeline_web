'use client'

import { ChangeEvent, ChangeEventHandler, useState } from "react"

export function MediaPicker(){

    const [preview, setpreview] = useState<string | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>){
        //console.log(event.target.files)
        const { files } = event.target

        if (!files){
            return
        }

        const previewURL = URL.createObjectURL(files[0]) 

        setpreview(previewURL)
    }

    return (
        <div className="py-3">
            <input onChange={onFileSelected} name="coverUrl" type="file" id="media" accept="image/*video/*" className="invisible hidden" />

            {preview && 
            (<img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />)
            }
        </div>
    )
}