import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-solid.svg';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code: React.FC<CodeProps> = ({ className, children, ...props }) => {
    const { t } = useTranslation();
    return (
        <pre className={classNames(cls.Code, {}, [className])} {...props}>
            <Button className={cls.copyBtn}>
                {t('Копировать')}
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
};
