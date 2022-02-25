import classes from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/bananas.png';

function Header() {
    return (
        <div className={classes.header}>
            <img src={logo} height='24' width='24' alt='logo'/>            
            <div className={classes['header-right']}>
                <p className={classes['header-item']}>Connect wallet</p>                
                <div className={classes['header-item']}>
                    <ThemeToggle /> 
                </div>
            </div>
        </div>
    );
}

export default Header;