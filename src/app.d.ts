// See https://kit.svelte.dev/docs/types#app

import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit";
import type { Session } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Error {
		// 	code: string;
		// 	id: string;
		// }
		// interface Platform {}
	}
}

export { };
