import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input';
import { Page } from 'widgets/Page';

const AboutPage: FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('О сайте')}
            {/* <Counter /> */}
        </Page>
    );
};

export default AboutPage;
