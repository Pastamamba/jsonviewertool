import React, { createContext, useContext, useState } from 'react';
import type { Item } from "@/components/treeview/types";
import {nokiaValues, testValues} from "@/components/testValues";

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
    const items: Item[] = nokiaValues;

    return (
        <ListViewContext.Provider value={{items, openItems, checkedItems, setOpenItems, setCheckedItems}}>
            {children}
        </ListViewContext.Provider>
    );
}
