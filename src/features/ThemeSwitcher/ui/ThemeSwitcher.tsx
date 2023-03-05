import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width={40} />
            ) : (
                <LightIcon width={40} />
            )}
        </Button>
    );
});
