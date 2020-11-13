import React from 'react';
import { useAppValue } from '../context/AppContext';

function AutoplaySwitch({ className }) {
    const [{ autoplay }, dispatch] = useAppValue();
    return (
        <div className={className}>
            {/* <input
                type="checkbox"
                name="autoplay"
                checked={autoplay}
                onChange={e =>
                    dispatch({
                        type: 'setAutoplay',
                        autoplay: e.target.checked,
                    })
                }
            />{' '}
            <small>自動播放</small> */}
            {/* 取消可以選擇自動播放 */}
        </div>
    );
}

export default AutoplaySwitch;
