import { Photo } from "@/types";
import { LikedButton } from "./LikedButton";

export const PhotoCard = ({ photo, liked, onLikeToggle }: { photo: Photo, liked: boolean, onLikeToggle: () => void }) => {
    return (
        <div className="w-full flex flex-row items-top justify-between my-8 h-[75px]">

            <div className="max-w-[400px] flex flex-row items-top justify-start">
                <LikedButton onLikeToggle={onLikeToggle} liked={liked} />
                <div className="w-[75px] h-[75px] rounded-lg overflow-hidden shadow-md flex-shrink-0 mr-4">
                    <img src={photo.src.medium} alt={photo.alt} className="w-full h-full object-cover" />
                </div>

                <div className="text-sm">
                    <div>
                        <b>{photo.photographer}</b>
                    </div>
                    <div className="max-h-[40px] line-clamp-2">{photo.alt}</div>
                    <div className="flex items-center space-x-2">
                        <div>{photo.avg_color}</div>
                        <div
                            className="w-3 h-3"
                            style={{ backgroundColor: photo.avg_color }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex items-top space-x-2">
                <img src="/links.svg" alt="link icon" className="w-[16px] h-[16px]" />
                <a href={photo.photographer_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Portfolio
                </a>
            </div>
        </div>
    );
}