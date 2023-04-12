import ShadowBox from '../Components/Common/ShadowBox';
import NumberIconBox from '../Components/NumberIconBox';
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.root}>
            <ShadowBox>
                <NumberIconBox
                    numb={'01'}
                    text={'MOBILE APP DEVELOPMENT'}
                    url={
                        'https://cdn3.destm.com/destm_com/main/images/variant_c/website_icon.webp'
                    }
                    url2={
                        'https://cdn3.destm.com/destm_com/main/images/variant_c/website_icon2.png'
                    }
                />
            </ShadowBox>
        </div>
    );
}
