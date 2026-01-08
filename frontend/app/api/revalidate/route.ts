import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // ✅ REQUIRED second argument: profile and instant updates
    revalidateTag("products", "default");
    revalidateTag("hero", "default");
    revalidateTag("banners", "default");

    // Optional but good
    revalidatePath("/", "page");
    revalidatePath("/products", "page");

    return NextResponse.json({
      revalidated: true,
      time: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Revalidation failed Check logs" },
      { status: 500 }
    );
  }
}
