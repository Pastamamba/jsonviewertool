import Editor from "@monaco-editor/react";
import React from "react";
import {useListViewContext} from "@/components/treeview/ListViewContext";

export const JsonPad = () => {
    const {items} = useListViewContext();

    return (
        <div className="flex justify-center items-start pt-10 h-screen">
            <div className="w-full max-w-4xl p-4 border">
                <div className="">
                    <Editor
                        language={"json"}
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
                        defaultLanguage="javascript"
                        defaultValue={JSON.stringify(items, null, 2)}
                        saveViewState={true}
                    />
                </div>
            </div>
        </div>
    );
}
