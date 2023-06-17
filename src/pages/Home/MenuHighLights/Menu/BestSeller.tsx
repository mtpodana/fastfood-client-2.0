import { NavLink } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './HighLights.module.scss';

const cx = classNames.bind(styles)

const BestSeller: React.FC<any> = ({ title, to, icon }) => {
    return (
        <NavLink className={(nav) => cx('menu-item-bestseller', { active: nav.isActive })} to={to}>
            <div className={cx('hover-bestseller')}>
                {title}
            </div>
        </NavLink>
    )
}

export default BestSeller;
