const Ad = require("../models/Ad");
const User = require("../models/User");

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;

    const purchaseAd = await Ad.findById(ad).populate("author");
    const user = await User.findById(req.userId);
  }
}

module.exports = new PurchaseController();
