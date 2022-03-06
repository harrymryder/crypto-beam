import { Box } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

import styles from './HomeView.module.css';

function HomeView() {
    return (
        <div className={styles.home}>
            <section className={styles['home-title']}>
                <h1>Donate your crypto to a refugee. Enable them to build a new life.</h1>
                <Box sx={{ height: 40 }} />
                <Link to="/campaigns">
                    <PrimaryButton
                        text='Donate directly'
                        fontSize={16}
                        paddingVertical={16}                
                        paddingHorizontal={24}       
                        icon={<BsArrowRight color={'white'} size={20}
                        />} />
                </Link>
            </section>
        </div>
    );
}

export default HomeView;