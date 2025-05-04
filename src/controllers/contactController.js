let contacts = [];

exports.getContacts = (req, res, next) => {
  try {
    res.json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
};

exports.addContact = (req, res, next) => {
  try {
    const { name, phone, email, image } = req.body;
    console.log('Received request:', req.body); 
    if (!name || !phone || !email || !image) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }
    const newContact = {
      id: Date.now(),
      name,
      phone,
      email,
      image
    };
    contacts.push(newContact);
    res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    next(err);
  }
};

exports.updateContact = (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, phone, email, image } = req.body;

    const index = contacts.findIndex(contact => contact.id == id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "Contact not found" });
    }

    contacts[index] = { id: parseInt(id), name, phone, email, image };
    res.json({ success: true, data: contacts[index] });
  } catch (err) {
    next(err);
  }
};

exports.deleteContact = (req, res, next) => {
  try {
    const { id } = req.params;
    const index = contacts.findIndex(contact => contact.id == id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "Contact not found" });
    }
    const deleted = contacts.splice(index, 1);
    res.json({ success: true, data: deleted[0] });
  } catch (err) {
    next(err);
  }
};
