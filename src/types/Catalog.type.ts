interface CatalogItem {
    id: string,
    name: string,
    path: string,
};

interface CatalogSubcategory {
    id: string,
    name: string,
    path: string,
    items: CatalogItem[]
};

export interface Catalog {
    id: string,
    name: string,
    path: string,
    img: string,
    subcategory: CatalogSubcategory[]
}