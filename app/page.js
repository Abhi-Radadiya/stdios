"use client";
// import { useState, useEffect } from "react";

// export default function Home() {
//     const handleSubmit = async () => {
//         const html = `<!DOCTYPE html>
//         <html lang="en">
//             <head>
//                 <meta charset="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>Business card || Learningrobo</title>
//                 <script src="https://cdn.tailwindcss.com"></script>
//             </head>
//             <body>
//                 <div class="w-[336px] h-[192px] border border-neutral-300">
//                     <div class="h-[2.73px] w-full mt-1.5 bg-[#CB994D]"></div>
//                     <div class="flex flex-row justify-between mt-[41px]">
//                         <div class="border-y-[5px] border-solid border-y-transparent h-[73.33px] border-l-[12.01px] border-l-[#CB994D]"></div>
//                         <div class="flex flex-col">
//                             <div class="max-w-[150px] react-draggable react-draggable-dragged" style="transform: translate(50px, -25px)">
//                                 <div class="w-[150px] border-neutral-300 rounded-lg border pl-2 placeholder:text-neutral-500">flkm</div>
//                             </div>
//                             <div class="py-2">
//                                 <div class="max-w-[150px] react-draggable react-draggable-dragged" style="transform: translate(-50px, 55px)">
//                                     <div class="w-[150px] border-neutral-300 rounded-lg border pl-2 placeholder:text-neutral-500">58tuhginjf</div>
//                                 </div>
//                             </div>
//                             <div class="max-w-[150px] react-draggable react-draggable-dragged" style="transform: translate(-50px, -39px)">
//                                 <div class="w-[150px] border-neutral-300 rounded-lg border pl-2 placeholder:text-neutral-500">dnfj</div>
//                             </div>
//                         </div>
//                         <div class="border-y-[5px] border-solid border-y-transparent h-[73.33px] border-r-[12.01px] border-r-[#CB994D]"></div>
//                     </div>
//                     <div class="bg-[#3f435e] h-5 mt-[45px]"></div>
//                 </div>
//             </body>
//         </html>
//         `;

//         try {
//             const response = await fetch("http://localhost:3000/api/handleform", {
//                 method: "POST",
//                 body: JSON.stringify({ html: html }),
//                 headers: {
//                     "content-type": "application/json",
//                 },
//             });

//             console.log("response==>", typeof response.body, response.body);

//             if (response.ok) {
//                 const blob = await response.blob();

//                 // Create a temporary link element
//                 const link = document.createElement("a");
//                 link.href = window.URL.createObjectURL(blob);
//                 link.download = "result.pdf";

//                 // Trigger a click on the link to start the download
//                 document.body.appendChild(link);
//                 link.click();

//                 // Remove the link from the DOM
//                 document.body.removeChild(link);
//             } else {
//                 console.error("Failed to fetch PDF:", response.statusText);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             {/* 61481954 */}
//             {/* 337.26 204.03 */}

//             <span className="text-[#FEFEFE]">ANGELA LEE</span>
//             <span className="text-[#FEFEFE]">HEAD OFFICER</span>
//             <span className="text-[#3B3F74]">AMOORA</span>
//             <span className="text-[#3B3F74]">YOur Tablne Here</span>
//             <span className="text-[#3B3F74]">Malaysia, Selangor 10 St. Avenue</span>
//             <span className="text-[#3B3F74]">angelalee@amoora.com</span>
//             <span className="text-[#3B3F74]">+07382 314 092</span>
//             <span className="text-[#3B3F74]">www.amoora.com</span>
//         </>
//     );
// }

import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const SlopedRectangle = () => {
    const [input, setInput] = useState({
        personName: "ANGELA LEE",
        post: "HEAD OFFICER",
        companyName: "AMOORA",
        tagLine: "Enter Tag Line",
        address: "Malaysia, Selangor 10 St. Avenue",
        email: "angelalee@amoora.com",
        number: "+07382 314 092",
        website: "www.amoora.com",
    });

    const handleChange = (field, value) => {
        setInput((prevState) => {
            return { ...prevState, [field]: value };
        });
    };

    const handleClickSubmit = async () => {
        const html = `<!DOCTYPE html>
         <html lang="en">
             <head>
                 <meta charset="UTF-8" />
                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                 <title>Business card || Learningrobo</title>
                 <script src="https://cdn.tailwindcss.com"></script>
             </head>
             <body>${divRef.current.outerHTML}</body>
         </html>
        `;
        console.log("html==>", html);

        try {
            const response = await fetch("/api/handleform", {
                method: "POST",
                body: JSON.stringify({ html: html }),
                headers: {
                    "content-type": "application/json",
                },
            });
            if (response.ok) {
                const blob = await response.blob();

                // Create a temporary link element
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "result.pdf";

                // Trigger a click on the link to start the download
                document.body.appendChild(link);
                link.click();

                // Remove the link from the DOM
                document.body.removeChild(link);
            } else {
                console.log("Failed to fetch PDF:", response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const divRef = useRef();

    return (
        <>
            <div className="relative max-w-[337.26px] w-full h-[204.03px] border border-neutral-300 rounded-lg" ref={divRef}>
                <div className="relative h-[60px] w-[250px]">
                    <div className="absolute -z-10 h-full w-full bg-[#3c7fc1] transform origin-top-right rounded-br-[26px] -skew-x-[27deg]" />
                    <div className="pt-5 pl-16">
                        <SingleInput
                            bounds={{ left: -50, top: -25, right: 20, bottom: 20 }}
                            handleChange={handleChange}
                            valueType="personName"
                            style="text-[1.7rem] text-[#000] font-semibold"
                            value={input.personName}
                        />
                        <div className="-mt-3 ml-10">
                            <SingleInput
                                bounds={{ left: -100, top: -25, right: 20, bottom: 0 }}
                                handleChange={handleChange}
                                valueType="post"
                                style="font-light scale-[0.7] text-[#000]"
                                value={input.post}
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute right-4 top-8">
                    <SingleInput bounds={{ left: -30, top: -25, right: 0, bottom: 0 }} handleChange={handleChange} valueType="companyName" style="ml-3" value={input.companyName} />
                </div>

                <div className="absolute right-0 top-[46px]">
                    <SingleInput
                        bounds={{ left: -30, top: -25, right: 0, bottom: 0 }}
                        handleChange={handleChange}
                        valueType="tagLine"
                        style="font-light -mt-1 scale-[0.7] -ml-4 text-[#3B3F74]"
                        value={input.tagLine}
                    />
                </div>

                <div className="">
                    <div className="absolute -right-3 bottom-[102px]">
                        <SingleInput
                            bounds={{ left: -60, top: -20, right: 0, bottom: 100 }}
                            handleChange={handleChange}
                            valueType="address"
                            style="text-[#3B3F74] font-light scale-[0.8]"
                            value={input.address}
                        />
                    </div>
                    <div className="absolute -right-2 bottom-[79px]">
                        <SingleInput
                            bounds={{ left: -60, top: -40, right: 0, bottom: 80 }}
                            handleChange={handleChange}
                            valueType="email"
                            style="text-[#3B3F74] font-light scale-[0.8]"
                            value={input.email}
                        />
                    </div>
                    <div className="absolute right-0 bottom-[54px]">
                        <SingleInput
                            bounds={{ left: -60, top: -60, right: 0, bottom: 60 }}
                            handleChange={handleChange}
                            valueType="number"
                            style="text-[#3B3F74] font-light scale-[0.8]"
                            value={input.number}
                        />
                    </div>
                    <div className="absolute right-0 bottom-[30px]">
                        <SingleInput
                            bounds={{ left: -60, top: -80, right: 0, bottom: 30 }}
                            handleChange={handleChange}
                            valueType="website"
                            style="text-[#3B3F74] font-light scale-[0.8]"
                            value={input.website}
                        />
                    </div>
                </div>
            </div>

            <button className="border border-neutral-300 rounded-lg px-3 py-1 bg-neutral-300 ml-10 mt-6" onClick={handleClickSubmit}>
                Submit edited card
            </button>
        </>
    );
};

export default SlopedRectangle;

const SingleInput = (props) => {
    const { handleChange, bounds, value, placeholder, valueType, style } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Draggable bounds={bounds}>
                <div className="" onDoubleClick={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {!isHovered ? (
                        <div className={style}>{value || placeholder}</div>
                    ) : (
                        <input
                            type="text"
                            placeholder={placeholder}
                            className={`border-neutral-300 rounded-lg border w-fit ${style}`}
                            onChange={(e) => handleChange(valueType, e.target.value)}
                            value={value}
                        />
                    )}
                </div>
            </Draggable>
        </>
    );
};
