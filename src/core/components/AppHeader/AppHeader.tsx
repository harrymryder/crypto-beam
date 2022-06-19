import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';

import web3 from '../../../web3';
import styles from './AppHeader.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import logo from '../../assets/bananas.png';
import ThemeContext from '../../store/theme/theme-context';
import AppButton from '../AppButton/AppButton';

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
// const CONNECTED_TEXT = 'Connected';

function AppHeader() {
    const theme = useContext(ThemeContext);
    // const darkMode: boolean = theme.darkMode;    
    let address: string;
    const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
    const [isConnected, setIsConnected] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const onboarding: any = useRef();

    useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setIsConnected(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setIsConnected(false);
            }
        }
    }, [accounts]);

    // Connect to MetaMask
    async function connectWalletHandler() {
        function handleNewAccounts(newAccounts: []) {
            setAccounts(newAccounts);
        }

        let ethereum: any = (window as any).ethereum;
        
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            try {
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: '0x1' }],
                });
                ethereum.request({
                    method: 'eth_requestAccounts'
                }).then(handleNewAccounts);
                ethereum.on('accountsChanged', handleNewAccounts);
                return () => {
                    ethereum.off('accountsChanged', handleNewAccounts);
                };
            } catch (e: any) {
                throw new Error(e);
            }
        }   
    }

    const classesFunction = (isActive: boolean): string => {
        let classes: string = styles.link;
        classes = isActive ? classes.concat(` ${styles.active}`).toString() : classes;
        // classes = darkMode ? classes.concat(` ${styles['dark-mode']}`).toString() : classes.concat(` ${styles['light-mode']}`).toString();
        return classes;
    };

    function formatAddress(): string {
        const account: string = accounts[0];
        const start: string = `${account.substring(0, 6)}`
        const end: string = `${account.substring(account.length - 4, account.length)}`
        return `${start}...${end}`;
    }

    return (
        <header className={styles.header}>
            <div className={styles['header-left']}>
                <img src={logo} height='24' width='24' alt='logo' />
            </div>
            <div className={styles['nav-links']}>
                <NavLink className={({ isActive }) => isActive ? classesFunction(true) : classesFunction(false)} to='/'>
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? classesFunction(true) : classesFunction(false)} to='/campaigns'>
                    Campaigns
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? classesFunction(true) : classesFunction(false)} to='/my-donations'>
                    My donations
                </NavLink>
            </div>
            <div className={styles['header-right']}>
                <div className={styles['header-item']}>
                    <ThemeToggle />
                </div>
                {isConnected ?
                    <div className={styles.address}>{formatAddress()}</div>
                    : <AppButton
                        text={buttonText}
                        isDisabled={isConnected}
                        onClick={connectWalletHandler}
                        animate={false} />}
            </div>
        </header>
    );
}

export default AppHeader;