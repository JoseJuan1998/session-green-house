import { MouseEvent, MouseEventHandler } from "react";

export interface AvatarProps{
    size:'sm'|'md'|'lg'|'xl',
    imageSrc?:string,
    isLoading?:boolean,
    backgroundColor?:string,
    text?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
    numberOfCharacters?:1|2
}