const { register, login } = require('../services/authService');

exports.register = async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    const user = await register(email, password, name, role);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
