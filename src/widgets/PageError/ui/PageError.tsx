import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }:PageErrorProps) => (
    <div className={classNames(cls.PageError, {}, [className])}>
        <span>Something went wrong.</span>
        <Button onClick={reloadPage}>
            Update
        </Button>
    </div>
);
