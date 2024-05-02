'use client'

import React from 'react';
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemMenu } from "@/components/treeview/ListItemMenu";


export const ListItemComponent = ({ item, openItems, setOpenItems, checkedItems, setCheckedItems }) => {
    const handleToggle = (id) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
        setCheckedItems(prev => ({ ...prev, [id]: !checkedItems[id] }));
    };

    return (
        <>
            <ListItem disablePadding sx={{ bgcolor: checkedItems[item.id] ? 'lightblue' : 'inherit' }}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checkedItems[item.id] || false}
                        disableRipple
                        onChange={() => handleToggle(item.id)}
                    />
                </ListItemIcon>
                <ListItemButton onClick={() => setOpenItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}>
                    <ListItemText primary={item.label} />
                    {item.children.length > 0 ? (openItems[item.id] ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
                <ListItemMenu />
            </ListItem>
            <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {item.children.map((child) => (
                        <ListItemComponent
                            key={child.id}
                            item={child}
                            openItems={openItems}
                            setOpenItems={setOpenItems}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                            level={1}
                        />
                    ))}
                </List>
            </Collapse>
        </>
    );
}
