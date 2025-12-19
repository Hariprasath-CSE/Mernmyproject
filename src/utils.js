export const getImageUrl = (image) => {
    if (!image) return "https://via.placeholder.com/150";
    if (image.startsWith("http") || image.startsWith("data:")) return image;
    return `/${image}`;
};
