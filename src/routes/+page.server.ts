import { invalid, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const user = formData.get('user');

    if (!user) {
      return invalid(400, { missing: true });
    }

    return { success: true };
  }
}