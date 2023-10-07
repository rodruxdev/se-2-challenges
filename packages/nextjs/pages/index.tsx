import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="text-center mb-6">
            <span className="block text-2xl mb-2">SpeedRunEthereum</span>
            <span className="block text-4xl font-bold">Challenge #0: Simple NFT</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/hero.png"
              width="727"
              height="231"
              alt="challenge banner"
              className="rounded-xl border-4 border-primary"
            />
            <div className="max-w-3xl">
              <p className="text-center text-lg">
                🌟 This is an app to purchase and transfer NFTs. Share your NFTs with your friends and collect them all!
              </p>
              <p className="text-center text-lg">
                🖼️ Buy and check your NFTs{" "}
                <Link href="/myNFTs" className="underline">
                  HERE🦓
                </Link>
              </p>
              <p className="text-center text-lg mt-8">
                🎫 This app was created to learn basics of 🏗️ Scaffold-ETH 2. It uses 👷‍♀️
                <a href="https://hardhat.org/getting-started/" target="_blank" rel="noreferrer" className="underline">
                  HardHat
                </a>{" "}
                to compile and deploy smart contracts. Then, it uses a template React app full to connect with Ethereum
                blockchain.
              </p>
              <p className="text-center text-lg mt-8">
                This challenge was edited and completed by 🧑‍💻
                <a href="https://www.rodrux.com/" target="_blank" rel="noreferrer" className="underline">
                  @rodruxdev
                </a>
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
