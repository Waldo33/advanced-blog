import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLAttributes, memo, SVGProps } from 'react';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const Icon = memo<IconProps>((props: IconProps) => {
    const { className, Svg, ...otherProps } = props;

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
