import { useEffect } from "react";
import { applicationStore, FullReducer } from "../application.store";

interface PropTypes {
	children: React.ReactNode;
	value?: FullReducer | Record<string, any>;
}

export function ApplicationProvider ({ children, value = {} }: PropTypes) {
	
	useEffect(() => {
		applicationStore.setState(prev => ({ ...prev, ...value }));
	} , [value]);

	return <>
		{children}
	</>;
}
