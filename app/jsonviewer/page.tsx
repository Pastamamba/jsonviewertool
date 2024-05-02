import React from "react";
import { SidePanel } from "@/components/sidepanel/SidePanel";
import { JsonPad } from "@/components/jsonpad/JsonPad";

const JsonviewerPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className="w-2/5 bg-gray-200">
                <SidePanel />
            </div>
            <div className="w-3/5 bg-gray-100">
                <JsonPad />
            </div>
        </div>
    );
}

export default JsonviewerPage;
