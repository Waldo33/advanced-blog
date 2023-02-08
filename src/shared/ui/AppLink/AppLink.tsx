import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = ({
  theme = AppLinkTheme.PRIMARY,
  className,
  ...props
}) => {
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...props}
    />
  );
};
