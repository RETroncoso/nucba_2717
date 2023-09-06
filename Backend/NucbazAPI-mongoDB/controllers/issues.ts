import { Request, Response } from "express";
import Issue, { IIssue } from "../models/issue";
import { ObjectId } from "mongoose";

export const postNewIssue = async (req: Request, res: Response) => {
    const {title, description, priority}: IIssue = req.body;
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const issueData = {
        title,
        description,
        priority,
        createdAt: new Date(),
        user: usuarioId
    };

    const issue = new Issue(issueData);

    await issue.save();

    res.status(201).json({
        issue
    })

}