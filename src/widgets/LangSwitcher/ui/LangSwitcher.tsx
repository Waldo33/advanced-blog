import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import EnFlag from 'shared/assets/icons/en.png';
import RuFlag from 'shared/assets/icons/ru.png';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames('', {}, [className])}
        >
            <img width={40} src={i18n.language === 'ru' ? RuFlag : EnFlag} alt="" />
        </Button>
    );
};
