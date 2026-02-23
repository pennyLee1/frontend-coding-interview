

export const LikedButton = ({ onLikeToggle, liked }: { onLikeToggle: () => void; liked: boolean }) => {

    return (
        <button onClick={onLikeToggle} className="flex items-top justify-top w-[20px] h-[20px] mr-2">
            {liked ? (
                <img src="/StarFilled.svg" alt="Liked" className="min-w-[20px] min-h-[20px]" />
            ) : (
                <img src="/StarOutline.svg" alt="Not Liked" className="min-w-[20px] min-h-[20px]" />
            )}
        </button>
    );
};