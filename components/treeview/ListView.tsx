'use client'

import {useState} from "react";
import {List} from "@mui/material";
import {ListItemComponent} from "@/components/treeview/ListItemComponent";

export const ListView = () => {
    const [openItems, setOpenItems] = useState({});
    const [checkedItems, setCheckedItems] = useState({});
    const items = [
        { id: 1, label: "L1Low", children: [
                { id: 11, label: "DlProcedure", children: [
                        { id: 111, label: "Sub-subitem 1", children: [] },
                        { id: 112, label: "Sub-subitem 2", children: [] }
                    ] },
                { id: 12, label: "UlProcedure", children: [] }
            ]},
        { id: 2, label: "Item 2", children: [] },
        { id: 3, label: "Item 3", children: [
                { id: 31, label: "Subitem 3", children: [] }
            ]}
    ];

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {items.map((item) => (
                <ListItemComponent
                    key={item.id}
                    item={item}
                    openItems={openItems}
                    setOpenItems={setOpenItems}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                />
            ))}
        </List>
    );
}
