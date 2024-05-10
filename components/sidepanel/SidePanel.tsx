"use client";
import React from "react";
import ListView from "@/components/treeview/ListView";
import {JsonPad} from "@/components/jsonpad/JsonPad";
import {ListViewProvider} from "@/components/treeview/ListViewContext";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";

export const SidePanel = () => {
    const [jsonDiff, setJsonDiff] = React.useState(false);

    return (
        <>
            <ListViewProvider>
                <div className="w-[30rem] bg-gray-200 p-3">
                    <h1 className="text-sm font-bold">Official Use Cases</h1>
                    <div className={'w-full flex justify-start gap-4 p-3'}>
                        <FormControl size={'small'} variant={'outlined'}>
                            <InputLabel id={'uc-demo-dd'}>Use Case</InputLabel>
                            <Select labelId={'uc-demo-dd'} label={'Use Case'} value={10}>
                                <MenuItem value={10}>Mercury 2_1</MenuItem>
                                <MenuItem value={20}>Mercury 3_1</MenuItem>
                                <MenuItem value={30}>Mercury 4_1</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size={'small'} variant={'outlined'}>
                            <InputLabel id={'uc-demo-version'}>Version</InputLabel>
                            <Select labelId={'uc-demo-version'} label={'Version'} value={10}>
                                <MenuItem value={10}>1.0.0</MenuItem>
                                <MenuItem value={20}>2.9.3</MenuItem>
                                <MenuItem value={30}>4.3.2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <ListView/>
                </div>
                <div className="bg-gray-100 w-full">
                    <button
                        className={jsonDiff ? 'bg-neutral-800 text-white text-sm font-bold' : 'text-sm font-bold text-black'}
                        onClick={() => {
                            setJsonDiff(!jsonDiff);
                        }}>Diff
                    </button>
                    <JsonPad/>
                </div>
            </ListViewProvider>
        </>
    );
}
