import { createAction, props } from '@ngrx/store';

export const showToast = createAction(
  '[Global] Show Toast',
  props<{ message: string }>()
  );

export const hideToast = createAction(
  '[Global] Hide Toast'
)
