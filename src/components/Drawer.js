import React from "react";
import { useDrawer } from "../contexts/DrawerContext";

export default function Drawer({ children }) {
    const { drawer, setDrawer } = useDrawer();
    const [ open, setOpen ] = React.useState(false);

    const closeDrawer = () => {
        setDrawer({
            position: 'left'
        });
    }

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(drawer.open)
        })
    }, [drawer])

    console.log(drawer)

    return (
        <>
            <div className={`drawer ${drawer.position === 'right' ? 'drawer-end' : ''}`}>
                <input type="checkbox" className="drawer-toggle" checked={open} />
                <div className="drawer-content">
                    {children}
                </div>
                <div className="drawer-side">
                    <div className="drawer-overlay" onClick={closeDrawer}></div>
                    <div className={`p-4 bg-base-100 text-base-content relative ${drawer.size}`}>
                        {drawer.content}
                        <div className={'btn btn-ghost absolute top-4 right-4 font-bold text-xl'} onClick={closeDrawer}>X</div>
                    </div>
                </div>
            </div>
        </>
    )
}