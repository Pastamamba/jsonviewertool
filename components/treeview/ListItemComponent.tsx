'use client'

import React from 'react';
import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, List} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemMenu } from "@/components/treeview/ListItemMenu";
import { useListViewContext } from './ListViewContext';
import type { Item } from "@/components/treeview/types";

interface Props {
    item: Item;
    level: number;
}

export const ListItemComponent: React.FC<Props> = ({ item, level }) => {
    const { openItems, setOpenItems, checkedItems, setCheckedItems } = useListViewContext();

    const handleToggle = (id: number, children: Item[]) => {
        setCheckedItems(prev => {
            const newCheckedItems = { ...prev, [id]: !prev[id] };
            const toggleChildren = (childrenList: Item[]) => {
                childrenList.forEach(child => {
                    newCheckedItems[child.id] = newCheckedItems[id];
                    if (child.children.length > 0) {
                        toggleChildren(child.children);
                    }
                });
            };
            toggleChildren(children);
            return newCheckedItems;
        });
    };

    return (
        <>
            <ListItem
                disablePadding
                className={checkedItems[item.id] ? 'bg-blue-200' : 'inherit'}
                sx={{
                    paddingLeft: `${level * 30}px`,
                }}
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checkedItems[item.id] || false}
                        disableRipple
                        onChange={() => handleToggle(item.id, item.children)}
                    />
                </ListItemIcon>
                <ListItemButton onClick={() => setOpenItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}>
                    <ListItemText
                        primary={item.label}
                    />
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
                            level={level + 1}
                        />
                    ))}
                </List>
            </Collapse>
        </>
    );
};
