/** @type {import('./$types').PageServerLoad} */
import { blogsData } from '$lib/constants/blogsData.js';

export async function load({ params }) {
	return {
		blogSlug: blogsData.filter((blog) => {
			return blog.slug == params.slug;
		})
	};
}

