import './progress-bar.css';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
        <div className="progress-bar-filler" style={{ width: `${value}%` }}></div>
    </div>
  )
}

export default ProgressBar;