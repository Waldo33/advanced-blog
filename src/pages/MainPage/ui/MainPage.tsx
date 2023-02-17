import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
