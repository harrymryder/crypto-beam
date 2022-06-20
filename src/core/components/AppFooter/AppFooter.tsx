import { Box } from '@mui/system';
import { BsDiscord, BsTwitter, BsEnvelopeFill, BsGithub } from 'react-icons/bs';

import styles from './AppFooter.module.scss';

function AppFooter() {
    return (
        <div className={styles.footer}>                       
            <Box sx={{height: 24}}/>
            <div className={styles['footer-links']}>
                <a href='https://google.com' target={'_blank'} >About</a>
                <a href='https://google.com' target={'_blank'}>How it works</a>
                <a href='https://google.com' target={'_blank'}>Partners</a>
            </div>  
            <Box sx={{height: 16}}/>
            <div className={styles['footer-social']}>
                <BsDiscord className={styles['social-link']} />
                <BsTwitter className={styles['social-link']} />
                <BsEnvelopeFill className={styles['social-link']} />          
                <BsGithub className={styles['social-link']} />          
            </div>
            <Box sx={{height: 24}}/>
        </div>        
    );
}

export default AppFooter;