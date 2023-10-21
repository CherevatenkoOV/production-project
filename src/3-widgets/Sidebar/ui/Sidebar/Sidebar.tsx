import React, {useState} from "react";
import {classNames} from "6-shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "3-widgets/ThemeSwitcher";
import {LangSwitcher} from "3-widgets/LangSwitcher";
import {Button, ButtonSize, ButtonVariant} from "6-shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import AppLink, {AppLinkTheme} from "6-shared/ui/AppLink/AppLink";
import {RoutePath} from "6-shared/config/routeConfig/routeConfig";
import AboutUsIcon from "6-shared/assets/icons/about-us.svg"
import MainIcon from "6-shared/assets/icons/main.svg"


interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
            data-testid="sidebar"
        >
            <div className={cls.links}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.item}
                >
                    <AboutUsIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                />
            </div>

            <Button
                variant={ButtonVariant.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>

        </div>
    );
};

export default Sidebar;