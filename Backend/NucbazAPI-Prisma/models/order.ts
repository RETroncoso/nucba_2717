import { Model, Schema, Types, model } from "mongoose";

interface IShippingDetails {
    name: String;
    cellphone: String;
    location: String;
    address: String;
}
interface IPrismaShippingDetails {
    name: string;
    cellphone: string;
    location: string;
    address: string;
}

interface IItem {
    desc: String;
    id: Number;
    price: Number;
    quantity: Number;
    title: String;
}
interface IPrismaItem {
    desc: string;
    id: number;
    price: number;
    quantity: number;
    title: string;
    img: string
}

export interface IOrder {
    createdAt: Date;
    user: Types.ObjectId;
    price: Number;
    shippingCost: Number;
    items: IItem[];
    shippingDetails: IShippingDetails;
    status: String;
    total: Number
};

export interface IPrismaOrder {
    createdAt: Date;
    user: number;
    price: number;
    shippingCost: number;
    items: IPrismaItem[];
    shippingDetails: IPrismaShippingDetails;
    status: string;
    total: number
};

const OrderSchema = new Schema<IOrder>({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    shippingCost: {
        type: Number,
        required: true,
    },
    items: {
        type: [{
            desc: {
                type: String,
                required: true,
            },
            id: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
        }],
        required: true,
    },
    shippingDetails: {
        name: {
			type: String,
			required: true,
		},
		cellphone: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
    },
    status: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;