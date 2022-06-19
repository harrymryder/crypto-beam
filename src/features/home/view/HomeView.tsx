import { Box } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AppButton from '../../../core/components/AppButton/AppButton';
import ViewContainer from '../../../core/components/ViewContainer/ViewContainer';

import styles from './HomeView.module.css';

function HomeView() {
    return (
        <ViewContainer>
            <section className={styles['home-title']}>
                <h1>Donate your crypto to a refugee. Enable them to build a new life.</h1>
                <Box sx={{ height: 40 }} />
                <Link to="/campaigns">
                    <AppButton
                        text='Donate directly'
                        fontSize={16}
                        paddingVertical={16}
                        paddingHorizontal={24}
                        icon={<BsArrowRight color={'white'} size={20} />
                        } />
                </Link>
            </section>
        </ViewContainer>
    );
}

export default HomeView;