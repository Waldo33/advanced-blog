import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onOpenModal} theme={ThemeButton.CLEAR_INVERTED}>
                    {t('Войти')}
                </Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModal} onClose={onCloseModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ipsa?
                </Modal>
            </div>
        </div>
    );
};
