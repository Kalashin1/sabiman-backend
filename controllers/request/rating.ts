import { Request, Response } from "express";

import Ratings from '../../data/models/rating'
import Agents from '../../data/models/agent'

export const createRating = async (_req: Request, res: Response) => {
  const { requestId, customerRatingLevel, customerRemark } = _req.body
  try {
    const Rating = await Ratings.create({ requestId, customerRatingLevel, customerRemark })
    res.json(Rating)
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const agentRating = async (_req: Request, res: Response) => {
  const { id } = _req.params
  const { agentRatingLevel, agentRemark, agentId } = _req.body
  try {
    let agent = await Agents.findById(agentId);
    if (agent) {
      const Rating = await Ratings.findById(id)
      await Rating.update({ agentRatingLevel, agentRemark })
      res.json(Rating)
    }
    res.status(400).json({ message: 'no agent with that id'})
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const getRatings = async (_req: Request, res: Response) => {
  try {
    const ratings = await Ratings.find({})
    res.json(ratings)
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const getRating = async (_req: Request, res: Response) => {
  const { id } = _req.params
  console.log(id)
  try {
    const rating = await Ratings.findById(id)
    res.json(rating)
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}