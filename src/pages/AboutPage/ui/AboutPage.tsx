import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('О сайте')}
            {/* <Counter /> */}
        </div>
    );
};

export default AboutPage;
