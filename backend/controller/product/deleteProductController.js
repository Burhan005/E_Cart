const productModel = require("../../models/productModel");

const deleteProductController = async (req, res) => {
    try {
        const { productId } = req.params; // Make sure this matches your route

        console.log("Received request to delete product ID:", productId); // Log the ID

        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found.",
                success: false,
                error: true,
            });
        }

        res.json({
            message: "Product deleted successfully.",
            success: true,
            error: false,
        });
    } catch (err) {
        console.error("Error deleting product:", err); // Log the error
        res.status(500).json({
            message: err.message || "An error occurred while deleting the product.",
            success: false,
            error: true,
        });
    }
};
module.exports= deleteProductController