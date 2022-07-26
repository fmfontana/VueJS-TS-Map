import { GetterTree } from "vuex";
import { ILocState } from "./state";
import { IState } from "../index";

const getters: GetterTree<ILocState, IState> = {
	userLocation(state) {
		return state.usrLocation !== undefined;
	},
};

export default getters;
