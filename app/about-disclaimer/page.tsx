import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { anton_sc, julius_sans_one, bangers, bebasNeue } from "@/utils/fonts"


export default function AboutDisclaimer(){
    return (
        <div className="flex flex-wrap min-h-[1000px]">
                <div id="about" className="flex flex-col gap-10 w-full lg:w-1/2 pt-[10rem] px-[3rem] md:p-[12rem]">

                    <ScrollReveal>
                        <h1 className={`${anton_sc.className} text-3xl md:text-5xl`}>ABOUT SHAFFYNATION</h1>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            Welcome to ShaffyNation, a vibrant ecosystem built around creativity, community, and innovation. 
                            Inspired by the unique spirit of the "rock hyrax," 
                            ShaffyCoin ($SHAFFY) is more than just a memecoin – it’s a movement.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>WHAT IS SHAFFYCOIN?</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            ShaffyCoin is a cryptocurrency designed to bring people from all over the world together through fun, decentralization, 
                            and financial freedom. Our project combines the humor and culture of cryptocurrencies with a focus on creating long-term value. 
                            ShaffyNation is built on the belief that the simplest ideas can have the deepest impact.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>OUR VISION</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            Our mission is to build a global community that celebrates 
                            creativity and financial independence while fostering the responsible and sustainable 
                            growth of the crypto ecosystem.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>WHAT MAKES SHAFFICOIN UNIQUE?</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-2">ShaffyNation:</span> More than a token, we are a community dedicated to collective growth and mass adoption of blockchain technologies.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-2">The Power of Humor:</span> Our roots as a memecoin allow us to connect with our audience uniquely, using humor, memes, and creativity.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        <span className="font-bold mr-2">Unlimited Potential:</span> From NFTs to collaborations, ShaffyCoin is designed to expand its utility over time, creating impact both inside and outside the crypto space.
                        </p>
                    </ScrollReveal>
                </div>
                <div id="disclaimer" className="flex flex-col gap-10  w-full lg:w-1/2 pt-[5rem] p-[3rem] md:p-[12rem]">
                    <ScrollReveal>
                        <h2 className={`${anton_sc.className} text-3xl md:text-5xl`}>DISCLAIMER</h2>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            ShaffyCoin ($SHAFFY) is a Solana blockchain-based token created for experimentation and entertainment purposes. 
                            It should not be considered a financial investment or a guarantee of economic returns.
                        </p>
                    </ScrollReveal>

                    
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>NOT INVESTMENT ADVICE</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            The information presented on this website, or any other material related to ShaffyCoin, 
                            does not constitute financial, legal, or professional advice. Before buying, selling, or investing in ShaffyCoin, 
                            consult a qualified professional to assess the associated risks and opportunities.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>ASSOCIATED RISKS</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            <span className="font-bold mr-2">Market Volatility:</span> 
                            The value of ShaffyCoin may fluctuate significantly due to market conditions and other external factors.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            <span className="font-bold mr-2">Capital Loss:</span> 
                            By participating in the cryptocurrency market, you assume the full risk of partial or total loss of your investment.
                        </p>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            <span className="font-bold mr-2">Changing Regulations:</span> 
                            Cryptocurrency-related laws and regulations vary by jurisdiction and may change in the future, potentially affecting the accessibility and use of ShaffyCoin.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>LIMITATION OF LIABILITY</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        ShaffyNation, its creators, and associates are not responsible for:<br/>
                            —Financial losses related to the purchase or holding of ShaffyCoin.<br/>
                            —Technical issues on the blockchain that impact the token's operation.<br/>
                            —Investment decisions made based on the information provided on this site.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>USE AT YOUR OWN RISK</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                            By interacting with ShaffyCoin, you acknowledge and agree that you do so at your own risk and discretion.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h3 className={`${anton_sc.className} text-xl md:text-2xl`}>MODIFICATIONS</h3>
                        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-md mt-5">
                        ShaffyNation reserves the right to update this disclaimer at any time. We recommend checking it periodically to stay informed of any changes.
                        </p>
                    </ScrollReveal>
                </div>
        </div>
    )
}