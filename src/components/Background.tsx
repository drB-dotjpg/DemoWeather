import "../styles/Background.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface BackgroundProps {
    weatherDesc: string | undefined;
}

interface BackgroundGradient {
    bg1: string;
    bg2: string;
}

interface BackgroundLookup {
    [key: string]: BackgroundGradient;
}

export default function Background({ weatherDesc }: BackgroundProps) {

    const background = useRef() as React.MutableRefObject<HTMLDivElement>;

    function getBackground() {
        console.log(weatherDesc);
        const lookup = weatherDesc?.toLowerCase() ?? "clear";
        for (const [key, value] of Object.entries(bgLookup)) {
            if (lookup.includes(key)) {
                return value;
            }
        }
        return bgLookup[lookup];
    }

    useGSAP(() => {
        const bg = getBackground();
        gsap.to(background.current, {
            duration: 2,
            "--bg1": `#${bg.bg1}`,
            "--bg2": `#${bg.bg2}`
        });
    }, {
        dependencies: [weatherDesc]
    });

    return (
        <div className='background' ref={background}></div>
    );
}

const bgLookup: BackgroundLookup = {
    "cloudy": { bg1: "AEC1D4", bg2: "ABD2FA" },
    "overcast": { bg1: "AEC1D4", bg2: "ABD2FA" },
    "clear": { bg1: "7692FF", bg2: "ABD2FA" },
    "sunny": { bg1: "ABD2FA", bg2: "F1FEC6" },
    "thunder": { bg1: "091540", bg2: "3D518C" },
    "storm": { bg1: "091540", bg2: "3D518C" },
    "snow": { bg1: "AEC1D4", bg2: "ABD2FA" },
    "rain": { bg1: "091540", bg2: "AEC1D4" },
}