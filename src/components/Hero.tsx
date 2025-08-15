import { useEffect, useState } from "react"
import axios from "axios"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"
import { API_BASE } from "@/utils/API"
import Links from "./custom/Link"
import { type CarouselProps } from "@/types/Carousel.type"
import Slugify from "@/utils/Slugify"

const Hero = () => {
    const [slider, setSlider] = useState<CarouselProps[]>([])
    useEffect(() => {
        axios(`${API_BASE}api/slider`)
            .then((res) => {
                setSlider(res.data)
            })
            .catch((err) => {
                console.error("Carouselni olishda xatolik!", err);
            })
    }, [])

    return (
        <>
            <section>
                <Carousel className="relative w-full rounded-2xl overflow-hidden ">
                    <CarouselContent>
                        {slider.map(item => {
                            const isEnternal = item.link.startsWith("https://") || item.link.startsWith("http://")
                            return (
                                <CarouselItem key={item.id}>
                                    {isEnternal ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="z-70"
                                        >
                                            <img
                                                className="z-60"
                                                src={item.img}
                                                alt="This is carousel image"
                                            />
                                        </a>
                                    ) : (
                                        <Links to={`/category/${Slugify(item.link)}--${item.id}`}>
                                            <img src={item.img} alt="This is carousel image" />
                                        </Links>
                                    )}
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-700 rounded-full p-5 cursor-pointer" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 rounded-full p-5 cursor-pointer" />
                </Carousel>
            </section>
            <section>

            </section>
        </>
    )
}

export default Hero