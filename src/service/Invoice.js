// const User = require("../models/User");

// module.exports = {
//   async index(req, res) {
//     const { email } = req.params;

//     try {
//       const userInvoice = await User.findOne({
//         where: { email: email },
//         attributes: ["firstName", "lastName", "email"],
//         include: [
//           {
//             association: "item",
//             attributes: ["name", "value"],
//           },
//         ],
//       });

//       if(!userInvoice){
//         return res.status(404).json({Error: "User not found"})
//       }

//       if (!userInvoice.item.length) {
//         return res.status(200).json({ Error: "No invoice found" });
//       }

//       return res.status(200).json(userInvoice);

//     } catch (e) {
//       return res.status(404).json({Error: e.message});
//     }
//   },
// };
