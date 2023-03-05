import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import RuFlag from 'shared/assets/images/ru.png';
import EnFlag from 'shared/assets/images/en.png';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }: LangSwitcherProps) => {
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
            {i18n.language === 'ru'
                ? <img width={40} src={RuFlag} alt="" />
                : <img width={40} src={EnFlag} alt="" />}
        </Button>
    );
});
