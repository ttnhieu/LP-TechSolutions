import { Deserializable } from '@/shared/interfaces/Deserializable'
import { PorfolioInterface } from '../interfaces/Porfolio'
import { GalleryInterface } from '../interfaces/Gallery'

export class Porfolio implements Deserializable<Porfolio>, PorfolioInterface {
  id?: string
  thumbnail: string = '/images/placeholder/image-not-found.png'
  title: string = ''
  type: string = 'all'
  gallery: GalleryInterface[] = []

  deserialize(input: Partial<Porfolio>): Porfolio {
    if (input) {
      Object.assign(this, input)
    }

    return this
  }
}
