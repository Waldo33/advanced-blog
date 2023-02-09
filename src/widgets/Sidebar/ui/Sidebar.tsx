import { classNames } from "shared/lib/classNames/classNames";
import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Expand from "shared/assets/icons/expand.svg";
import Shrink from "shared/assets/icons/shrink.svg";

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
      <div
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
          <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
            {collapsed
                ? (
                    <Expand className={cls.expand} width={40} />
                  )
                : (
                    <Shrink className={cls.expand} width={40} />
                  )}
          </Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  );
};
