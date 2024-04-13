import React from "react";
import Hero from "../components/Hero";
import MainHero from "../components/MainHero";
import ChooseBetter from "../components/ChooseBetter";
import Navbar from "../components/OldNavbar";
import Products from "../components/Products";
import OurVision from "../components/OurVision";
import OurTarget from "../components/OurTarget";
import OurCustomers from "../components/OurCustomers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Homepage = () => {

    const [userAddress, setUserAddress] = useState("");
		const [isMounted, setIsMounted] = useState(false);
		const { address, isConnected } = useAccount();

		useEffect(() => {
			setIsMounted(true);
		}, []);

		useEffect(() => {
			if (isConnected && address) {
				setUserAddress(address);
			}
		}, [address, isConnected]);

		if (!isMounted) {
			return null;
		}
	return (
		<div className="overflow-x-hidden overflow-y-scroll">
			<MainHero />
			<ChooseBetter />
			<Products />
			<OurVision />
			<OurTarget />
			<OurCustomers />
			<Subscribe />
		</div>
	);
};

export default Homepage;
