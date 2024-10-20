// import React from 'react';

// const LandingPage: React.FC = () => {
//     return (
//         <div className="min-h-screen w-screen bg-gradient-to-b from-blue-900 to-gray-900 flex flex-col justify-center items-center text-white">

//         </div>
//     );
// };

// export default LandingPage;


import React, { useEffect, useState } from "react";
import { Box, Center, Image, Group, Text } from "@mantine/core";
// import { useNavigate } from "react-router-dom";

import {
	IconArrowNarrowUp,
	IconArrowNarrowDown,
	IconCircle,
} from "@tabler/icons-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FullPage, Slide } from "react-full-page";
import Features from "./Features";
// import { features } from "../../utils/content";

const features = [
	{
		title: "FIND",
		tagLine: "FIND VULNERABILITIES ",
		description:
			"Embark on an epic adventure through the marvelous realm of Cloud Force and discover four stunning regions teeming with hidden treasures. Scour every nook and cranny to find lootboxes and unlock powerful minicons.",
		color: "blue",
		imageURL: "/assets/videos/find.webm",
		link: ""
	},
	{
		title: "CREATE",
		tagLine: "CREATE IMPACT",
		description:
			"Put your skills to the test and dominate the battlefield with your personal lineup of minicons. Craft a team that suits your play style with a plethora of minicons to choose from, each with their own strengths and weakness.",
		color: "violet",
		imageURL: "/assets/videos/create.webm",
		link: ""
	},
	{
		title: "CONQUER",
		tagLine: "CONQUER ",
		description:
			"With every battle, the thrill of the hunt intensifies, and the rewards become even more enticing. Are you ready to unleash your inner warrior and claim the ultimate prize in Cloud Force?",
		color: "purple",
		imageURL: "/assets/videos/conquer.webm",
		link: ""
	},
];

const visitedSet = new Set<number>();

const Landing = () => {
    const [scollDetails, setScollDetails] = useState({ from: 0, to: 0 });
	const [currentSlide, setCurrentSlide] = useState(0);
	const dotRef = React.useRef<HTMLDivElement>(null);
	const fullPageRef = React.useRef(null);
    
	// const navigate = useNavigate();

	const beforeScroll = (detail: { from: number; to: number }) => {
		setScollDetails(detail);
		setCurrentSlide(detail.to);
		if (dotRef.current) {
			dotRef.current.style.transform = `translateY(${
				detail.to * 36 - 92
			}px)`;
			dotRef.current.style.transition = "transform 0.5s ease-in-out";
		}
	};

	const scrollUp = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		fullPageRef.current!.scrollToSlide(currentSlide - 1);
	};

	const scrollDown = () => {
		if (currentSlide < 6) {
			setCurrentSlide(currentSlide + 1);
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		fullPageRef.current!.scrollToSlide(currentSlide + 1);
	};

	const scrollTo = (slide: number) => {
		setCurrentSlide(slide);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		fullPageRef.current!.scrollToSlide(slide);
	};

    useEffect(() => {
        visitedSet.add(currentSlide);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "e" || e.key === "E") {
                // navigate("/login"); // Uncomment if you have navigation implemented
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentSlide]);

    return (
        <section className="h-full w-full bg-black">
    <FullPage ref={fullPageRef} afterChange={beforeScroll} duration={200}>
        <Slide>
            <section id="page1" className="h-full w-full sections flex flex-col items-center">
                <Box className="relative flex flex-col items-center w-full h-full">
                    <Text className="absolute w-[80%] mt-5 text-white text-5xl font-extrabold text-center">
                        Cloud Force
                    </Text>
                    <Box className="absolute top-[40%] w-[30%]">
                        <Text className="text-4xl text-white font-bold">Cloud Force Logo</Text>
                    </Box>
                    <Group className="absolute bottom-1/4 w-full justify-center items-center">
                        <Text className="font-heading text-new-white drop-shadow font-bold text-3xl tracking-widest">
                            PRESS
                        </Text>
                        <Text className="text-3xl text-yellow-300">E</Text>
                        <Text className="font-heading text-new-white drop-shadow font-bold text-3xl tracking-widest">
                            TO ENTER
                        </Text>
                    </Group>
                </Box>
            </section>
        </Slide>

        {/* Additional Slides */}
        {features.map((feature, idx) => (
            <Slide key={idx}>
                <Features
                    visitedSet={visitedSet}
                    scrollDetails={scollDetails}
                    idx={idx + 2}
                    title={feature.title}
                    color={feature.color}
                    imageURL={feature.imageURL}
                    isLeft={idx % 2 === 0}
                    description={feature.description}
                    tagLine={feature.tagLine}
                    link={feature.link}
                />
            </Slide>
        ))}
    </FullPage>
    <Center className="animate-fadeIn z-50 flex-col fixed top-0 right-0 h-full w-[50px]">
        <Center onClick={scrollUp} className={`h-[50px] w-[50px] flex items-center justify-center ${currentSlide === 0 ? 'invisible' : 'cursor-pointer'}`}>
            <IconArrowNarrowUp stroke={1} color="#F5F5F5" size={40} />
        </Center>
        <Group className="items-center my-10">
            <Center ref={dotRef} className="absolute w-full bg-transparent">
                <Box className="w-[19px] h-[19px] bg-new-white rounded-full" />
            </Center>
            {[...Array(6)].map((_, idx) => (
                <Center key={idx} onClick={() => scrollTo(idx)} className="w-full paginateDot transition-all cursor-pointer">
                    <IconCircle stroke={1} size={20} className="text-new-white transition-all" />
                </Center>
            ))}
        </Group>
        <Center onClick={scrollDown} className={`h-[50px] w-[50px] flex items-center justify-center ${currentSlide === 5 ? 'invisible' : 'cursor-pointer'}`}>
            <IconArrowNarrowDown stroke={1} color="#F5F5F5" size={40} />
        </Center>
    </Center>
</section>

    );
};

export default Landing;