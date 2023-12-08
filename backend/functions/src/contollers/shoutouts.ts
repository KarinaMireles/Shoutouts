import establishConnection from "../establishConnection";
import Shoutout from "../models/Shoutout";
import { Request, Response } from "express";

export interface ReqRes {
  (req: Request, res: Response): Promise<void>;
}

// CREATE

export const postItem: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const shoutout = await Shoutout.create(req.body);
    res.status(201).send(shoutout);
  } catch (err) {
    res.status(401).send("Bad Request");
  }
};

// READ

export const getItems: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const shoutout = await Shoutout.find();
    res.status(200).send(shoutout);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getItem: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const { id } = req.params;
    const shoutout = await Shoutout.findById(id);
    res.status(200).send(shoutout);
  } catch (err) {
    res.status(404).send("Shoutout not found");
  }
};

// UPDATE

export const putItem: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const { id } = req.params;
    const shoutout = await Shoutout.findByIdAndUpdate(id, req.body);
    res.status(200).send(shoutout);
  } catch (err) {
    res.status(404).send("Shoutout not found");
  }
};

// DESTROY

export const deleteItem: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const { id } = req.params;
    console.log("here");
    await Shoutout.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(404).send("Shoutout not found");
  }
};
