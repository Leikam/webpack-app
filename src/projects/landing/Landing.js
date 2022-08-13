import React from 'react';
import './Landing.styl';

export function Landing() {
    return (
        <div className='wrapper'>
            <div className="form">
                <label>
                    <input type="text" placeholder='имя'/>
                </label>
                <label>
                    <input type="text" placeholder='пароль' />
                </label>
                <br/>
                <button>захади дорогой</button>
            </div>
            <div className="promo">
                <div className="promo_image"></div>
            </div>
        </div>
    );
}
