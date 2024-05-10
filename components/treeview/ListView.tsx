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
        <div className={'ml-2 mr-2 text-sm'}>
            {items.map((item) => (
                <ListItemComponent
                    key={item.id}
                    item={item}
                    level={0}
                />
            ))}
        </div>
    );
}

export default ListView;
