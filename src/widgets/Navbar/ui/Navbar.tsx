import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('join')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Culpa esse ipsa iusto quo ullam, vitae?
                Molestiae pariatur quod repellendus ullam.
                Consequuntur dignissimos hic illum incidunt ipsa,
                maxime molestiae mollitia necessitatibus quidem quod
                quos rerum unde voluptatem? Consequatur consequuntur,
                illum itaque officia pariatur perferendis quam quis
                temporibus? Architecto expedita, officia. Odio?
            </Modal>
        </div>
    );
};
