const Product = require("../Schemas/product");
const Like = require("../Schemas/like");
const { ObjectId } = require("mongodb");

const getMatch = (product_name, company_name, arr) => {
  return arr
    ? {
        $or: [
          { [product_name]: { $in: arr } },
          { [company_name]: { $in: arr } },
        ],
      }
    : {};
};

const getProduct = async (req, res) => {
  try {
    const params = req.query;
    const user = req.user;
    let products, like, arr;
    if (params.search) {
      const split = params.search.split(" ");
      arr = split.map((e) => new RegExp(e));
    }
    products = await Product.aggregate([
      {
        $match: getMatch("PRDLST_NM", "BSSH_NM", arr),
      },
    ]);
    like = await Like.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "child",
        },
      },
      {
        $match: {
          $and: [
            { user_id: user },
            getMatch("child.PRDLST_NM", "child.BSSH_NM", arr),
          ],
        },
      },
      {
        $group: {
          _id: new ObjectId(),
          products: {
            $push: "$product_id",
          },
        },
      },
    ]);
    const likes = like[0] ? like[0]["products"] : like;
    return res.status(200).json({ products, likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

const addLike = async (req, res) => {
  try {
    Like.findOrCreate({
      user_id: req.user,
      product_id: req.body.productId,
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

const deleteLike = async (req, res) => {
  try {
    await Like.deleteOne({
      user_id: req.user,
      product_id: req.body.productId,
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  getProduct,
  addLike,
  deleteLike,
};
