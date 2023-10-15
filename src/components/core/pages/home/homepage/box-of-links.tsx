"use client";
import React from "react";
import Link from "next/link";

const BoxOfLinks = (props: any) => {
    return (
        <>

            <div>
                <h3 className="my-5">{props.heading}</h3>
                {
                    Object.keys(props.links).map((key, index) => {
                        return (
                            <div key={index}>
                                <Link href={props.links[key]} className="inline-block mt-2 font-bold text-blue-900">{key}</Link>
                            </div>
                        )
                    })

                }
            </div>



        </>
    )
}

export default BoxOfLinks