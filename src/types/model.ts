export interface SubMenuItem {
    name: string;
}

export interface MenuItem {
    name: string;
    children: SubMenuItem[];
}

export interface Schema {
    path: string;
    type: string;
    schema: any;
}
