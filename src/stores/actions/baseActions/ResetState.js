import { createAction } from "@reduxjs/toolkit";
import { RESET_STATE } from "../../actionTypes/baseAction";

export const resetState = createAction(RESET_STATE)