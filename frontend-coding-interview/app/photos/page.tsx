"use client";

import { Logo } from "@/components/Logo";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../api/getPhotos";
import { PhotoCard } from "@/components/PhotoCard";
import { useState } from "react";

export default function Photos() {
    const [likedPhotos, setLikedPhotos] = useState<boolean[]>([]);
    const onLikeToggle = (index: number) => {
        setLikedPhotos((prev) => {
            const newLikedPhotos = [...prev];
            newLikedPhotos[index] = !newLikedPhotos[index];
            return newLikedPhotos;
        });
    }

    const { data: photos } = useQuery({ queryKey: ['todos'], queryFn: getPhotos })

    return (
        <div className="w-full flex flex-col items-center justify-start py-8 px-4">
            <div className="max-w-[600px]">
                <Logo />
                <h1 className="text-2xl font-bold my-4">All Photos</h1>

                {photos?.map((photo, idx) => (
                    <PhotoCard key={photo.id} photo={photo} onLikeToggle={() => onLikeToggle(idx)} liked={likedPhotos[idx]} />
                ))}
            </div>
        </div>
    );
}
