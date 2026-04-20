import { videos } from '../data/videos'

export const getVideos = async () => {
  return videos
}

export const getVideoById = async (id: string) => {
  return videos.find(p => p.id === id)
}