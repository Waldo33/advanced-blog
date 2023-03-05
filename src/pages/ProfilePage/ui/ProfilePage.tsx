import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const defaultReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
