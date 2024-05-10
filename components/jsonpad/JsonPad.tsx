import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useListViewContext } from "@/components/treeview/ListViewContext";
import type { Item } from "@/components/treeview/types";

export const JsonPad = () => {
    const { items, checkedItems } = useListViewContext();
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    const filterCheckedItems = (items: Item[], checkedItems: Record<number, boolean>): Item[] => {
        const filtered = items.reduce<Item[]>((acc, item) => {
            const isChecked = checkedItems[item.id];
            const filteredChildren = filterCheckedItems(item.children, checkedItems);
            if (isChecked || filteredChildren.length > 0) {
                acc.push({
                    ...item,
                    children: filteredChildren,
                });
            }
            return acc;
        }, []);
        return filtered;
    };

    useEffect(() => {
        setFilteredItems(filterCheckedItems(items, checkedItems));
    }, [items, checkedItems]);

    return (
        <div className="flex justify-center items-start pt-10 h-screen">
            <div className="w-full max-w-4xl p-4 border">
                <div>
                    <Editor
                        language="json"
                        height="80vh"
                        loading={<>Loading...</>}
                        options={{
                            wordWrap: "on",
                            wrappingIndent: "same",
                            wrappingStrategy: "advanced",
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                            readOnly: true,
                        }}
                        value={JSON.stringify(filteredItems, null, 2)}
                    />
                </div>
            </div>
        </div>
    );
};
