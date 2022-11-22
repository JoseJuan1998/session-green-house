import { User } from 'phosphor-react'
import React from 'react'
import CircleSkeleton from '../../Skeletons/CircleSkeleton'
import styles from './Avatar.module.css'
import { AvatarProps } from './interface'


const Avatar = ({size, imageSrc, isLoading, backgroundColor, text, numberOfCharacters,onClick}:AvatarProps) => {
    
    return (
        <div 
            className={`${styles[size]} ${styles.container}`}
            style={{backgroundColor:imageSrc?'transparent':backgroundColor}}
            onClick={onClick}
        >
            {imageSrc&&
                !isLoading?
                <img src={imageSrc} alt='avatar'/>:
                isLoading?<CircleSkeleton/>:
                <p>{text?.slice(0,numberOfCharacters?numberOfCharacters:2).toUpperCase()}</p>
            }
        </div>
    )
}

export default Avatar

Avatar.defaultProps={
    size:'md'
}