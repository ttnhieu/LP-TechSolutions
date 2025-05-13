import { Deserializable } from '@/shared/interfaces/Deserializable'
import { GalleryInterface } from '../interfaces/Gallery'
export class Gallery implements Deserializable<Gallery>, GalleryInterface {
  src: string = ''
  title?: string
  description?: string
  width?: number = 1600
  height?: number = 900

  deserialize(input: Partial<Gallery>): Gallery {
    if (input) {
      Object.assign(this, input)
    }

    return this
  }
}
