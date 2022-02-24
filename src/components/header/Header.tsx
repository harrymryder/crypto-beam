import classes from './Header.module.css';
import ThemeToggle from './ThemeToggle';

function Header() {
    return (
        <div className={classes.header}>
            <div>
                <p>web3 reviews</p>
            </div>
            <div className={classes['header-right']}>
                <ThemeToggle />
                <p>Connect wallet</p>                
            </div>

        </div>
    );
}

export default Header;