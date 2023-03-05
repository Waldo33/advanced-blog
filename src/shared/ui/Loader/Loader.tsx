import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}
export const Loader: FC<LoaderProps> = memo(({ className }: LoaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
