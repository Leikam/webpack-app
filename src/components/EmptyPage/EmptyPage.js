import React from 'react';
import './EmptyPage.styl';

export function EmptyPage() {
    return (
        <div className='wrapper'>
            <div className="form">
                <label>
                    <input type="text"/> - имя
                </label>
                <br/>
                <label>
                    <input type="text"/> - пароль
                </label>
                <br/>
                <button>захади дорогой</button>
            </div>
            <div className="promo"></div>
        </div>
    );
}
