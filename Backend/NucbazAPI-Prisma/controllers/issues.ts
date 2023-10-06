import { Request, Response } from "express";
import Issue, { IIssue, IPrismaIssue } from "../models/issue";
import { ObjectId } from "mongoose";
import { prisma } from "../app";

export const postNewIssue = async (req: Request, res: Response) => {
    const {title, description, priority}: IPrismaIssue = req.body;
    // const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const usuarioId: number = req.body.usuarioConfirmado.id;

    const issueData = {
        title,
        description,
        priority,
        createdAt: new Date(),
        user: usuarioId
    };

    // const issue = new Issue(issueData);

    // await issue.save();

    const issue = await prisma.issue.create({
        data: {
            ...issueData
        }
    })

    res.status(201).json({
        issue
    })

}