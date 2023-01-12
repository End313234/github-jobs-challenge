import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC, ReactElement, ReactNode } from "react";

export type GetLayoutFunction = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: GetLayoutFunction
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
};

export type LayoutWithChildren = FC<{ children: ReactNode }>;
