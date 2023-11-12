const puppeteer = require("puppeteer");
import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        name: "Bishal Shrestha",
        age: "27",
    };

    return NextResponse.json({ data });
}

export async function POST(req, res) {
    const data = await req.json();

    const html = data.html;

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "domcontentloaded" }); // Change waitUntil to domcontentloaded

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(1000);

    const width = 336; // Set to your desired width
    const height = 220;

    const pdfBuffer = await page.pdf({
        path: "result.pdf",
        margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
        printBackground: true,
        format: "A4",
    });

    await browser.close();

    const headers = {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=result.pdf",
    };

    // Send the PDF buffer using NextResponse
    // return NextResponse(pdfBuffer, 200, headers);

    const resX = new NextResponse(pdfBuffer, {
        status: 200,
        headers: new Headers({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=result.pdf",
        }),
    });

    return resX;

    // return NextResponse.json(data);
}
