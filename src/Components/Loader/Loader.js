import RLoader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.overlay}>
      <RLoader
        type="BallTriangle"
        color="#3E96A5"
        height={80}
        width={80}
        timeout={0}
      />
    </div>
  );
}

export default Loader;