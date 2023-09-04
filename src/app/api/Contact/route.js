import Contact from '@/models/contact'
import dbConnect from '@/utils/dbconnect';
import { NextResponse } from 'next/server';

export async function POST(req, res){
    try {
        console.log('api called');
        const body = await req.json();
        let a = await dbConnect();
        // console.log('db conn', a);
        let b= await Contact.create(body)
        // console.log('doc ', b);
        return NextResponse.json({
            message: "message sent successfully"
        },{
            status:200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "server error"
        },{
            status:500
        })
    }
}