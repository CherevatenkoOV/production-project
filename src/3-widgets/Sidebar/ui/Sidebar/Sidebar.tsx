import React, {useState} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "3-widgets/ThemeSwitcher";
import {LangSwitcher} from "3-widgets/LangSwitcher";
import {Button} from "6-shared/ui/Button/Button";


interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                TOGGLE
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>

        </div>
    );
};

export default Sidebar;