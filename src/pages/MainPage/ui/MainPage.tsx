import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
        </Page>
    );
};

export default MainPage;
