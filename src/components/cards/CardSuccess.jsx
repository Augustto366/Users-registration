import React from 'react'
import './CardSuccess.css'

const CardSuccess = () => {

    function rem() {
        const div = document.querySelector('.notifications-container');
    
        div.classList.toggle('hidden')
    }

    return (


        <div class="notifications-container">
            <p class="text-sm text-yellow-700">
                Usuário criado com sucesso!
            </p>


            <div onClick={rem} class="outer">
                <div class="inner">
                    <label>Sair</label>
                </div>
            </div>
        </div>
    )
}



export default CardSuccess