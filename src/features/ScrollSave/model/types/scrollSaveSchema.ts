export type ScrollSchema = Record<string, number>

export interface ScrollSaveSchema {
    scroll: ScrollSchema;
}

export interface ScrollPositionAction {
    path: string;
    position: number;
}
