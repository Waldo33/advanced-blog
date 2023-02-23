import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
export const Portal: FC<PortalProps> = ({ children, element = document.body }) => createPortal(children, element);
