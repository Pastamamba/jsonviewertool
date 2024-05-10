import React, {createContext, useContext, useState} from 'react';
import type {Item} from "@/components/treeview/types";

interface ListViewContextType {
    items: Item[];
    openItems: Record<number, boolean>;
    checkedItems: Record<number, boolean>;
    setOpenItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
    setCheckedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

const ListViewContext = createContext<ListViewContextType | undefined>(undefined);

export const useListViewContext = () => {
    const context = useContext(ListViewContext);
    if (!context) {
        throw new Error('useListViewContext must be used within a ListViewProvider');
    }
    return context;
}

export const ListViewProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
    const items: Item[] = [
        {
            id: 1, label: "DFE", children: [
                {
                    id: 11, label: "downlink", children: [
                        {id: 111, label: "Carrier", children: []},
                        {id: 112, label: "CarrierGroup", children: []},
                        {id: 113, label: "Downlink", children: []},
                        {id: 114, label: "Stream", children: []},
                    ]
                },
                {
                    id: 12, label: "uplink", children: [
                        {
                            id: 121, label: "Carrier", children: []
                        },
                        {id: 124, label: "Stream", children: []},
                        {id: 122, label: "UlEqu", children: []},
                        {id: 123, label: "Uplink", children: []},
                    ]
                }
            ]
        },
        {
            id: 2, label: "eFramer2", children: [
                {id: 21, label: "addEgressStream", children: []},
                {id: 22, label: "addIngressStream", children: []},
                {id: 23, label: "configureEgressMacHeader", children: []},
                {id: 24, label: "configureStatic", children: []},
                {id: 25, label: "enableEgressStream", children: []},
                {id: 26, label: "enableIngressStream", children: []},
            ]
        },
        {
            id: 3, label: "JESD", children: [
                {
                    id: 31, label: "JesdDlProcedureAPI", children: [
                        {id: 311, label: "config", children: []},
                    ]
                },
                {
                    id: 32, label: "JesdUlProcedureAPI", children: [
                        {id: 321, label: "config", children: []},
                    ]
                },
            ]
        },
        {
            id: 4, label: "L1LOW", children: [
                {
                    id: 41, label: "DlProcedure", children: [
                        {id: 411, label: "configureDlFreqDomCarrier", children: []},
                        {id: 412, label: "configureDlInstance", children: []},
                        {id: 413, label: "configureHaltOnFly", children: []},
                        {id: 414, label: "configureSchedulerB", children: []},
                        {id: 415, label: "configureStream", children: []},
                        {id: 416, label: "configureStreamPhaseCompensation", children: []},
                        {id: 417, label: "enableStream", children: []},
                        {id: 418, label: "setTddPattern", children: []},
                    ]
                },
                {
                    id: 42, label: "UlProcedure", children: [
                        {id: 421, label: "configureSchedulerB", children: []},
                        {id: 422, label: "configureStream", children: []},
                        {id: 423, label: "configureUlFreqDomCarrier", children: []},
                        {id: 424, label: "configureUlInstance", children: []},
                        {id: 425, label: "enableStream", children: []},
                        {id: 426, label: "setTddPattern", children: []},
                    ]
                },
                {
                    id: 43, label: "RtDlProcedure", children: [
                        {id: 431, label: "setupCtrlWord", children: []},
                        {id: 432, label: "startStream", children: []},

                    ]
                },
                {
                    id: 44, label: "RtUlProcedure", children: [
                        {id: 443, label: "setupAutoPrach", children: []},
                        {id: 444, label: "setupCtrlWord", children: []},
                        {id: 445, label: "setupCtrlWordPrach", children: []},
                        {id: 446, label: "startStream", children: []},
                        {id: 447, label: "startStreamPrach", children: []},
                    ]
                },
            ]
        },
        {
            id: 5, label: "RFIF", children: [
                {
                    id: 51, label: "RfifrxProcedureAPI", children: [
                        {id: 511, label: "configure", children: []},
                        {id: 512, label: "setComponerMode", children: []},
                    ]
                },
                {
                    id: 52, label: "RfiftxProcedureAPI", children: [
                        {id: 521, label: "configure", children: []},
                        {id: 522, label: "setBcnFifoReadStartTime", children: []},
                    ]
                },
            ]
        },
    ];

    return (
        <ListViewContext.Provider value={{items, openItems, checkedItems, setOpenItems, setCheckedItems}}>
            {children}
        </ListViewContext.Provider>
    );
}
