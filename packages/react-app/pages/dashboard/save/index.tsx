import Link from "next/link";
import DashHeader from "../../../components/DashHeader";
// import { useContext } from "react";
// import { userContext } from "../userContext";

const Save = () => {
	// const { emailAddress, fullName } = useContext(userContext);
	const save = [
		{
			title: "Safe Lock",
			subtitle:
				"Lock your money without access for a period of time and get 5% interest",
			active: "false",
			link: "",
		},
		{
			title: "Thrift Savings",
			subtitle:
				"Save money with your friends collectively as a team and get 5% interest",
			active: "true",
			link: "/dashboard/save/thrift-save",
		},
		{
			title: "Target savings",
			subtitle:
				"Save towards a specific goal/purpose within a defined period of time",
			active: "false",
			link: "",
		},
	];

	const style = {
		activeBox:
			"flex justify-center items-center px-4 md:px-8 flex-col h-[450px] shadow-lg border-[1px] border-primaryBlack rounded-2xl text-primaryBlack bg-darkGray text-white",
		box: "flex justify-center items-center px-4 md:px-8 flex-col h-[450px] bg-white shadow-lg border-[1px] border-primaryBlack rounded-2xl text-primaryBlack hover:bg-darkGray hover:text-white",
	};
	return (
		<>
			<DashHeader />
			<div className="px-8 md:px-16 my-12  grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-x-16 gap-y-8 text-primaryBlack -mt-6 xl:-mt-10">
				{save.map((data, index) => (
					<Link href={data.link}>
						<div
							className={
								data.active === "true" ? style.activeBox : style.box
							}
							key={index}
						>
							<p className="font-bold">{data.title}</p>
							<span className="text-center">{data.subtitle}</span>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Save;
