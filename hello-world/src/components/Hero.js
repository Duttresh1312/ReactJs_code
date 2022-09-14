import React from 'react'

function Hero({heroname}) {
    if(heroname === 'Joker'){
        throw new Error('Not a Hero')
    }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default Hero
