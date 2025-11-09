import Link from "next/link";

export default function HeroSection() {

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: 'url("/contents/home/bg.jpg")',
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-start">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold sd-boot sd-down sd-d1">
                        미생물 생분해 
                        <br />
                        펄프 멀칭지란?
                    </h1>
                    <p className="mb-5 sd-boot sd-down sd-d2">
                        친환경 미생물 생분해 펄프멀칭지는 <b className="text-lg">순수 펄프를 이용한 멀칭지</b>로 
                        <br />
                        농작물을 경작하는 밭이나 논 또는 하우스 토양의 표면을 덮어 
                        <br />
                        <b className="text-lg">잡초억제, 생장촉진, 제균과 제충, 토양침식 방지,</b> 
                        <br />
                        <b className="text-lg">토양수분 유지, 지온조절</b> 효과와 함께
                        <br />
                        <b className="text-lg">친환경으로 생분해</b>되어
                        <b className="text-lg"> 유기질 비료</b>로 활용됩니다
                        
                    </p>
                    <Link href={`/contact`} className="btn btn-primary sd-boot sd-down sd-d4">문의하기</Link>
                </div>
            </div>
        </div>
    )
}