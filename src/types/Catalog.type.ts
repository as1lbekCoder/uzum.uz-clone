export interface CatalogsItem {
    id: number,
    title: string,
};

interface CatalogsSubcategory {
    id: number,
    title: string,
    cildren: CatalogsItem[]
};

export interface Catalogs {
    id: number,
    title: string,
    img: string,
    children: CatalogsSubcategory[]
}