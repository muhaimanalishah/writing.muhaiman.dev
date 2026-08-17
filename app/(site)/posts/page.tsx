import { permanentRedirect } from "next/navigation"

/* The homepage is the complete index; a separate listing would
   duplicate it. Old /posts links land there. */
export default function PostsPage() {
  permanentRedirect("/")
}
