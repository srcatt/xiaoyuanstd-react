export default function Navbar() {
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
            <div className="navigation-btn navigation-expand">
                <img src="./images/actions/menu.svg" alt="Menu"></img>
            </div>
        </header>
    )
}