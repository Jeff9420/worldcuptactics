import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getUserProfile } from "../../../lib/supabase-server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10" as any, // use current API version
});

export async function POST(req: NextRequest) {
  try {
    const userProfile = await getUserProfile();

    if (!userProfile?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Replace with your actual Stripe Price ID for $9.99/mo
    const PRICE_ID = process.env.STRIPE_PRICE_ID; 

    if (!PRICE_ID) {
      return NextResponse.json({ error: "Stripe configuration missing" }, { status: 500 });
    }

    const origin = req.headers.get("origin") || "https://worldcuptactics.com";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: userProfile.user.email,
      client_reference_id: userProfile.user.id, // We map the Stripe purchase to the Supabase User ID
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${origin}/matches?upgraded=true`,
      cancel_url: `${origin}/pro?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
