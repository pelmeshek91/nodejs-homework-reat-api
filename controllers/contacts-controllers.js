import Contact from "../models/Contact.js";
import HttpError from "../helpers/HttpError.js";
import contactsSchema from "../schemes/contacts-schema.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  // const { page = 1, limit = 10 } = req.query;
  const result = await Contact.find({ owner });

  res.json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
  // const { error } = contactsSchema.contactsAddSchema.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // }
  // const result = await Contact.create(req.body);
  // res.status(201).json(result);
};

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({
    message: "contact deleted",
  });
};

const update = async (req, res, next) => {
  const { error } = contactsSchema.contactsAddSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing fields");
  }

  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const updateStatusContact = async (req, res, next) => {
  const { error } = contactsSchema.contactUpdateFavoriteSchema.validate(
    req.body
  );
  if (error) {
    throw HttpError(400, "missing field favorite");
  }

  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getById: ctrlWrapper(getById),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
