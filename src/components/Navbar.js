import { React } from "react";

export default function Navbar() {
    function ExpandDrawer() {
        const navigationBtnGroup = document.getElementById('navigation-btn-group');
        if (navigationBtnGroup.dataset.expand === "false") {
            navigationBtnGroup.dataset.expand = "true";
        } else {
            navigationBtnGroup.dataset.expand = "false";
        }
    };


    return (
        <header className="navigation">
            <a className="navigation-title" href="/">
                XiaoYuanStudio
            </a>
            <div id="navigation-btn-group" data-expand="false">
                <a className="navigation-btn" href="/about">
                    关于
                </a>
                <a className="navigation-btn" href="/softwares">
                    软件
                </a>
                <a className="navigation-btn" href="/malwares">
                    病毒
                </a>
            </div>
            <div className="flex-expand"></div>
            <div className="navigation-btn" id="navigation-expand" onClick={ExpandDrawer}>
                <img src={process.env.PUBLIC_URL + "/images/actions/menu.svg"} alt="Menu"></img>
            </div>
        </header>
    )
}