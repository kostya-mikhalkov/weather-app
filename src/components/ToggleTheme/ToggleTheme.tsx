import { useSelector, useDispatch } from 'react-redux';
import { toggleChange } from "../../store/slice/appSlice";
import { RootState } from '../../store/store';
import './ToggleTheme.css'

const ToggleTheme = () => {
    const stateToggle = useSelector((state: RootState) => state.weather.toggle);
    const dispatch = useDispatch();
    const onClickCircle = () => {
        const elemCircle = document.querySelector('.circle') as HTMLElement;
        const elemBody = document.querySelector('body') as HTMLBodyElement | null;
        
        if (!elemCircle) {
            throw new Error('Element with class "circle" not found');
          }
        if (!elemBody) {
            throw new Error('Body element not found');
        }

        elemCircle.classList.toggle('active');
        elemBody.classList.toggle('dark-theme');
        dispatch(toggleChange());
    }
    return (
        <div className="wrapper">
            <div className="toggle"
                onClick={() => onClickCircle()}>
                <div className="circle"></div>
            </div>
            <h6 className="wrapper_title">{!stateToggle ? 'Light theme' : 'Dark theme'}</h6>
        </div>
    )
}

export default ToggleTheme;