import React, {useState} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import ThemeSwitcher from "3-widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "3-widgets/LangSwitcher";


interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>


            <button
                onClick={onToggle}
            >
                TOGGLE
            </button>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>

        </div>
    );
};

export default Sidebar;