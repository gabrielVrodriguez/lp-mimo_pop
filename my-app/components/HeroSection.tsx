import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { BackgroundEffect } from "./common/BackgroundEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export function HeroSection() {
    return (
        <section className="relative min-h-full flex overflow-hidden">
            {/*  */}
            <BackgroundEffect />

            <div className="container mx-auto px-4 py-8 sm:py-24 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    {/* Badge */}
                    <Badge variant="secondary" className="mb-6 px-4 py-5 text-sm bg-white/90 backdrop-blur border-2 border-primary/20 shadow-lg text-primary font-bold">
                        <Sparkles className="w-4 h-4 mr-2 text-amber-500 animate-pulse" />
                        Presentes que viram memórias
                    </Badge>

                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl  font-black mb-6 tracking-tighter">
                        <span className="bg-gradient-to-r from-amber-500 via-orange-400 to-orange-500 
                        bg-clip-text text-transparent drop-shadow-sm">
                            Mimo Pop
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-3xl font-bold text-black/90 mb-4 uppercase tracking-wide">
                        Seu personagem favorito,{" "}
                        <span className="bg-rose-500 text-white px-2 py-1 rotate-[-3deg] inline-block">do seu jeito</span>
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl font-medium">
                        Funkos personalizados, action figures e presentes únicos feitos com amor e criatividade.
                    </p>

                    {/* CTA Button */}
                    <Button
                        asChild
                        size="lg"
                        className="cursor-pointer bg-[#478ce6] hover:bg-[#477eff]  text-white text-xl px-10 py-8 h-auto 
                        shadow-[0_8px_0_#3864cc] 
                        active:shadow-none active:translate-y-2
                        transition-all duration-300 ease-in-out
                        rounded-2xl font-black flex items-center gap-4 border-none"
                    >
                        <a href="https://wa.me/13997567987">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                style={{ width: '40px', height: '40px' }}
                            />
                            QUERO O MEU AGORA!
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}