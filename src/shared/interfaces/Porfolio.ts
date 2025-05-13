import { GalleryInterface } from './Gallery'

export interface PorfolioInterface {
  id?: string
  thumbnail: string // ảnh đại diện
  title: string
  type: string
  gallery: GalleryInterface[]
}
