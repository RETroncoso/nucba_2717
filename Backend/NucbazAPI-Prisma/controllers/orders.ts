import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import Order, { IOrder, IPrismaOrder } from "../models/order";
import { prisma } from "../app";

export const getOrders = async (req: Request, res: Response) => {
    
    // const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
    const usuarioId: number = req.body.usuarioConfirmado.id;

    // const consulta = { user: usuarioId };

    // const orders = await Order.find(consulta)

    const orders = await prisma.order.findMany({
        where: {
            user: usuarioId
        },
        include: {
            shippingDetails: true,
            items:  true
        }
    })
    
    res.status(200).json({
        data: [
            ...orders
        ]
    })
}

export const createOrder = async (req: Request, res: Response) => {
    // const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
    const usuarioId: number = req.body.usuarioConfirmado.id;

    const orderData: IPrismaOrder = req.body

    const {price, shippingCost, total, items, shippingDetails} = orderData

    // const data = {
    //     ...orderData,
    //     user: usuarioId,
    //     createdAt: new Date(),
    //     status: "pending"
    // }

    // const order = new Order(data);

    // await order.save();

    const order = await prisma.order.create({
        data: {
            price,
            shippingCost,
            total,
            items: {
                create: [...items]
            },
            user: usuarioId,
            shippingDetails: {
                create: {
                    ...shippingDetails
                }
            }
        },
        include: {
            shippingDetails: true,
            items:  true
        }
    })

    res.status(201).json({
        order
    })

}