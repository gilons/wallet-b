export enum Locales {
    EN = "en",
    FR = "fr",
    CHIN = "chin"
}

export type Locale = `${Locales}`;
export interface WithLocalePropsType {
    children: React.ReactElement
}
