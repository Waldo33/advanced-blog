import { classNames } from 'shared/lib/classNames/classNames';
import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
        className={classNames('', {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
