const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findOne({
        where: { id: user_id },
        attributes: ["firstName", "lastName", "email"],
        include: [
          {
            association: "item",
            attributes: ["name", "value"],
          },
        ],
      });

      if(!user){
        return res.status(404).json({Error: "User not found"})
      }

      if (!user.item.length) {
        return res.status(200).json({ Error: "No invoice found" });
      }

      return res.status(200).json(user);

    } catch (e) {
      return res.status(404).json({Error: e.message});
    }
  },
};
