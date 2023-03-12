import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, FC, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}
export const Avatar: FC<AvatarProps> = ({
    className, src, size = 100, alt,
}) => {
    const mods: Mods = {

    };

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
            alt={alt}
        />
    );
};
