import chatContract from "../blockchain.js";

export const getMessages = async (request, response, next) => {
  try {
    const user1 = request.userId;
    const user2 = request.body.id;

    if (!user1 || !user2) {
      return response.status(400).json({ error: "Both user IDs are required" });
    }

    // Call the blockchain contract to get messages between user1 and user2
    // Example: await chatContract.getConversation(user2)
    // You will need to convert user IDs to Ethereum addresses
    // and handle ABI encoding/decoding

    // Placeholder response
    return response.status(200).json({ messages: [] });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error.message });
  }
};
