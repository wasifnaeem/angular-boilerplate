interface IElement {
    items: Array<string>,
    is_satisfied: boolean
}

export interface ICheckList {
    headings?: Array<string>
    elements?: Array<IElement>
}