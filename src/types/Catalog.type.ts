interface CatalogItem {
    id: number,
    title: string,
};

interface CatalogSubcategory {
    id: number,
    title: string,
    cildren: CatalogItem[]
};

export interface Catalog {
    id: number,
    title: string,
    img: string,
    children: CatalogSubcategory[]
}