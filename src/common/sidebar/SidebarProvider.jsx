import React, { useEffect } from "react";
import SideLink from "./SideLink";
import { Drawer } from "antd";
import TouchableOpacity from "../../components/buttons/TouchableOpacity";
import { RxCross2 } from "react-icons/rx";
import usePath from "../../hooks/usePath";
import SideLogout from "./SideLogout";

const SidebarProvider = ({
    links = [],
    isOpen = false,
    setIsOpen = () => { },
}) => {
    const path = usePath();
    useEffect(() => {
        if(path.navigate){
            setIsOpen(false);
        }
    }, [path.navigate]);

    const SidebarComponent = () => {
        return <div className="w-full h-full bg-red-700 main-text text-white">
            <div className="p-3 flex justify-between items-center">
                <h2 className="text-[20px]">AdsWatcher</h2>
                <TouchableOpacity onClick={() => setIsOpen(false)} className="md:hidden">
                    <RxCross2 size={18} />
                </TouchableOpacity>
            </div>

            <div className="flex flex-col px-3 my-4 justify-start items-start gap-y-3">
                {
                    links?.map((props, index) => (
                        <SideLink key={index} {...props} />
                    ))
                }
                <SideLogout />
            </div>
        </div>
    }

    return <>
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            closable={false}
            styles={{
                body: {
                    margin: 0,
                    padding: 0,
                }
            }}
            placement="left"
        >
            <SidebarComponent />
        </Drawer>

        <section className="sticky top-0 left-0 h-screen w-[20%] hidden md:block">
            <SidebarComponent />
        </section>
    </>
}

export default SidebarProvider;