import { useCallback } from "react";
import { useState } from "react";

export const useLike = () => {
    // opinions states
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const clickLike = useCallback(() => {
        setLiked(!liked);
        setDisliked(false);
    }, [liked]);
    const removeLike = useCallback(() => {
        setLiked(false);
    }, []);
    const clickDislike = useCallback(() => {
        setDisliked(!disliked);
        setLiked(false);
    }, [disliked]);
    const removeDislike = useCallback(() => {
        setDisliked(false);
    }, []);
    return { liked, disliked, clickLike, removeLike, clickDislike, removeDislike };
};
