const User=require('./../Model/userSchema')

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  };

  exports.register = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({ email, password: hashedPassword });
  
      // Save the user to the database
      await user.save();
  
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  };
  
  
  
  
  