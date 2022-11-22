import {PencilSimple} from 'phosphor-react'
import styles from './Button.module.css'

const Button = ({variant}:{variant?:string}) => {
    return (
        <button className={styles.button} >
            <div className={styles.containerButton}>
                <div>
                    <PencilSimple size='1.6rem' color="#fff" />
                </div>
                <p className={styles.textButton}>Edit profile</p>
            </div>
        </button>
    )
}

export default Button