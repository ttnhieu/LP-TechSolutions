'use client'

import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Captions from 'yet-another-react-lightbox/plugins/captions'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import { GalleryInterface } from '@/shared/interfaces/Gallery'

type LightBoxProps = {
  open: boolean
  close: () => void
  slides: GalleryInterface[]
} & Omit<React.ComponentProps<typeof Lightbox>, 'open' | 'close' | 'slides'>

/** Giải thích đoạn code trên
 * React.ComponentProps<typeof Lightbox>: lấy toàn bộ kiểu props mà Lightbox hỗ trợ.
 * Omit<..., "open" | "close" | "slides">: loại bỏ các prop đã custom để tránh trùng.
 * ...restProps: gom tất cả props còn lại để truyền xuống Lightbox.
 */
function LightBox({ open, close, slides, ...restProps }: LightBoxProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      plugins={[Captions, Zoom, Thumbnails, Fullscreen]}
      {...restProps}
    />
  )
}

export default LightBox
