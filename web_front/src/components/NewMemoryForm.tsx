'use client'
import { Camera } from "lucide-react";
import { MediaPicker } from "./mediaPicker";
import { FormEvent } from "react";
import { api } from "@/lib/api";

export function NewMemoryForm(){
  async  function handleCreateMemory(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        
        const fileToUpload = formData.get('coverUrl')

        if (fileToUpload){
            const uploadFormData = new FormData()
            uploadFormData.set('file', fileToUpload)

            const uploadResponse = await api.post('/upload', uploadFormData)

            console.log(uploadResponse.data)
        }
    }

    return (
        <form action="" onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-4">
                <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                    <Camera className="w-4 h-4" />
                    Anexar mídia
                    
                </label>
                

                <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                    <input type="checkbox" name="isPublic" id="isPublic" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500" value="true" />
                    Tornar memória pública
                </label>
            </div>
            <MediaPicker />
            <textarea name="content" spellCheck="false" 
            className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 mt-2 focus:ring-0" 
            placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre." id=""></textarea>
            
            <button type="submit" className='self-end inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700'>
                CADASTRAR LEMBRANÇA
            </button>
        </form>
    )
}