"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function ImageModal({src, alt,}: {src: string, alt: string}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="relative w-full h-64 rounded-xl overflow-hidden group cursor-zoom-in"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                        Click to expand
                    </span>
                </div>
            </button>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 animate-in fade-in duration-200"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl p-3 shadow-2xl animate-in zoom-in-95 fade-in duration-200"
                    >
                        {/* <button
                            onClick={() => setOpen(false)}
                            className="absolute z-50 rounded-full bg-black/70 border border-white/10 p-2 text-white hover:bg-black/90 hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            <X size={15} />
                        </button> */}

                        <div className="relative w-full h-[75vh] flex items-center justify-center">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain max-h-full w-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}