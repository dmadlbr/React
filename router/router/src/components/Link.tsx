import { Link, type LinkProps } from "react-router";
import type { routeMapsType} from "../types/route";

type TLinkProps = Omit<LinkProps, "to"> & {
    to: routeMapsType;
}

export const TypedLink = (props: TLinkProps) => {
    return <Link {...props}/>
};