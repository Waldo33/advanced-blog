import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

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
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <LoginForm />
    </Modal>
);
