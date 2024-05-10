"use client";
import React from "react";
import ListView from "@/components/treeview/ListView";
import {JsonPad} from "@/components/jsonpad/JsonPad";
import {ListViewProvider} from "@/components/treeview/ListViewContext";
export const SidePanel = () => {
  return (
      <>
          <ListViewProvider>
          <div className="w-2/5 bg-gray-200">
              <h1 className="text-sm font-bold">Official Use Cases</h1>
              <ListView/>
          </div>
          <div className="w-3/5 bg-gray-100">
              <JsonPad/>
          </div>
          </ListViewProvider>
      </>
  );
}
