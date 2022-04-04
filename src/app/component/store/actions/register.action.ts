import { ActionType } from './../actionsType';
import { createAction, props } from "@ngrx/store";

export const registrationAction = createAction(
    ActionType.REGISTER,
    props<{ firstName: string; lastName: string; userName: string; city: string; password: string; passRepeat: string; agree: boolean; }>(),
) 