const Slugify = (text: string): string => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s\-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/\-+/g, "-")
        .replace(/^\-+|\-+$/g, "");
};

export default Slugify