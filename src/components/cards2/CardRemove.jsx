import React from 'react'
import styles from './Remove.module.css'

const CardRemove = () => {

    function remo() {
        const div = document.querySelector(`.${styles.notificationscontainer}`)
       
        if (div) {
            div.classList.toggle(styles.hiddenR);
        }

    }

    return (

        <div className={styles.notificationscontainer}>
            <p class="text-sm text-yellow-700">
                Usuário deletado com sucesso!
            </p>


            <div onClick={remo} className={styles.outer}>
                <div className={styles.inner}>
                    <label>Sair</label>
                </div>
            </div>
        </div>

    )
}

export default CardRemove