import { useContext } from 'react';
import './progress-bar.css';
import DataContext from '../../../context/DataContext';

const ProgressBar = () => {


    const {progress} = useContext(DataContext);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="progress-bar-filler" style={{ width: `${progress}%` }}></div>
            </div>
        </div>

    )
}

export default ProgressBar;