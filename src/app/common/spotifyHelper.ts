import { User } from "../models/user";

export function SpotifyCurrentUserForUser(user: SpotifyApi.CurrentUsersProfileResponse): User {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url
  }
}
