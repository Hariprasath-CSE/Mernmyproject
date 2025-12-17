const ProductCard = (props) => {
    const { name, price, originalPrice, image, onAddToCart } = props;
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <div className="flex items-center gap-3 mb-4">
                    <p className="text-blue-600 font-bold text-lg">{price}</p>
                    <p className="text-red-500 line-through text-sm">{originalPrice}</p>
                </div>
                <button
                    onClick={onAddToCart}
                    className="w-full mt-auto py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-semibold"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
export default ProductCard;
