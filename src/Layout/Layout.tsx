import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/solid";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Layout = () => {
	// const particlesInit = useCallback(async (engine: Engine) => {
	//   await loadFull(engine);
	// }, []);
	// const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
	}, [theme]);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			// console.log(clientX, clientY);

			setMousePosition({
				x: clientX,
				y: clientY,
			});
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	const [enabled, setEnabled] = useState(theme === "light");

	const handleThemeChange = (enabled: boolean) => {
		setTheme(enabled ? "light" : "dark");
		setEnabled(enabled);
	};

	return (
		<div
			className="relative bg-slate-100 dark:bg-slate-900 transition-colors duration-500 ease-in-out"
			style={{
				backgroundImage: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15) , transparent 100%)`,
			}}
		>
			<Nav />
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
		</div>
	);
};
export default Layout;
