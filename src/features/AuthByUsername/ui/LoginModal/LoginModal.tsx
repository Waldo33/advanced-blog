import { classNames } from 'shared/lib/classNames/classNames';
import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    const navigate = useNavigate();

    const onSuccess = () => {
        onClose();
        navigate('/about');
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onSuccess} />
            </Suspense>
        </Modal>
    );
};
