import { BrowserWindow, dialog, Main, Menu } from "electron";
import * as jetpack from 'fs-jetpack';

export class FileService {
    selectWD(successHandler: dialogSuccess, failedHandler: dialogFailure) {
        dialog.showOpenDialog({
            properties: [
                "openDirectory"
            ]
        }).then((x: any) => {
            if (x.canceled) {
                failedHandler("operation was cancelled")
                return;
            }
            successHandler(x.filePaths[0])
        }).catch((x: string) => {
            failedHandler(x)
        });
    }

    getAllInDirectory(path: string): any[] {
        let list = jetpack.list(path)
        if (list === undefined){
            return []
        }
        let result: any[] = [];
        for (const file of list) {
            let object: any = jetpack.read(file, "json")
            result.push(object);
        }
        return result;
    }
}
export type dialogSuccess = (path: string) => void
export type dialogFailure = (error: string) => void