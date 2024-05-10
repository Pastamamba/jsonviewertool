import React from 'react';
import { List } from '@mui/material';
import { ListItemComponent } from "@/components/treeview/ListItemComponent";
import { useListViewContext } from './ListViewContext';

export const ListView: React.FC = () => {
    return (
            <ListViewContent />
    );
}

const ListViewContent: React.FC = () => {
    return (
        <List className="w-full bg-white">
            <RenderListItemComponents />
        </List>
    );
}

const RenderListItemComponents: React.FC = () => {
    const { items } = useListViewContext();

    return (
        <>
            {items.map((item) => (
                <ListItemComponent
                    key={item.id}
                    item={item}
                    level={0}
                />
            ))}
        </>
    );
}

export default ListView;
