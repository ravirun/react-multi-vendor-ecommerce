import React from "react";
import Drawer from "../components/Drawer";

const DrawerContext = React.createContext();
export const useDrawer = () => React.useContext(DrawerContext);

export default function DrawerProvider({children}) {
    const [drawer, setDrawer] = React.useState({});
    return (
        <DrawerContext.Provider value={{ drawer, setDrawer }}>
            <Drawer>
                {children}
            </Drawer>
        </DrawerContext.Provider>
    )
}