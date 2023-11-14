export const test = async (req, res) => {
  try {
    res.json({ text: "Hello world" });
  } catch (e) {
    console.log(e);
  }
};
