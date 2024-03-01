import Lottie from 'react-lottie';
import * as LoadingPirate from '../assets/lottie/pirate-loading.json';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoadingPirate,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className='loader'>
            <Lottie options={defaultOptions} width={200} height={200} />
        </div>
    )
}

export default Loader;
