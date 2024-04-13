import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/equivestLogo.svg";
import notification from "../assets/notification.svg";
import user from "../assets/user.svg";
import setting from "../assets/setting.svg";
import back from "../assets/back.svg";

interface HeaderProps {
	title?: string;
	backBtn?: boolean;
}

const DashHeader: FC<HeaderProps> = ({ title, backBtn }) => {
	const style = {
		menus: "border-[1px] border-white rounded-md px-4 py-2 font-bold hover:bg-primaryYellow hover:text-primaryBlack hover:border-0",
		menuActive:
			"rounded-md px-4 py-2 bg-primaryYellow text-primaryBlack font-bold",
	};

	return (
		<header className="w-full">
			<div className="hidden lg:flex items-center justify-center bg-primaryBlack py-3">
				<Image src={logo} alt="equinest Logo" className="w-1/12"/>
			</div>
			<div className="bg-lightGray text-white h-56 px-4 md:px-8 xl:px-16">
				<nav className="flex justify-between items-center pt-8">
					<div className="flex gap-12">
						<Link href="/">
							<a>
								<img src={logo} alt="logo" className="cursor-pointer" />
							</a>
						</Link>
						<div className="hidden lg:flex items-center gap-x-6">
							{backBtn && (
								<span
									className={style.menuActive}
									onClick={() => window.history.back()}
								>
									Back
								</span>
							)}
							<Link href="/dashboard">
								<a className={style.menuActive}>Dashboard</a>
							</Link>
							<Link href="/dashboard/save">
								<a className={style.menus}>Save</a>
							</Link>
							<Link href="/dashboard/invest">
								<a className={style.menus}>Invest</a>
							</Link>
							<Link href="/dashboard/community">
								<a className={style.menus}>Community</a>
							</Link>
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-end gap-4">
						<img src={setting} alt="setting" className="w-[17%] h-auto" />
						<img
							src={notification}
							alt="notification"
							className="w-[14%] h-auto"
						/>
						<img src={user} alt="user" />
					</div>
					<img src={user} alt="user" className="lg:hidden" />
				</nav>
				<div className="flex items-center mt-6">
					<p className="font-bold text-3xl ml-4">{title}</p>
				</div>
			</div>
		</header>
	);
};

export default DashHeader;
