import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = ({
    theme = AppLinkTheme.PRIMARY,
    className,
    ...props
}) => (
    <Link
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...props}
    />
);
